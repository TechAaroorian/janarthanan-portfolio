import React, { useEffect, useRef } from "react";
import * as THREE from "three";
import { useTheme } from "../../context/ThemeContext";

export const HeroCanvas: React.FC = () => {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const { theme } = useTheme();

  useEffect(() => {
    if (!containerRef.current) return;

    const container = containerRef.current;
    const scene = new THREE.Scene();

    const camera = new THREE.PerspectiveCamera(
      60,
      container.clientWidth / container.clientHeight,
      0.1,
      1000,
    );
    camera.position.z = 30;

    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    renderer.setSize(container.clientWidth, container.clientHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    container.appendChild(renderer.domElement);

    // Spread particles
    const particleCount = 75;
    const geometry = new THREE.BufferGeometry();
    const positions = new Float32Array(particleCount * 3);
    const initialPositions = new Float32Array(particleCount * 3);

    for (let i = 0; i < particleCount * 3; i += 3) {
      const x = (Math.random() - 0.5) * 60;
      const y = (Math.random() - 0.5) * 35;
      const z = (Math.random() - 0.5) * 15;

      positions[i] = x;
      positions[i + 1] = y;
      positions[i + 2] = z;

      initialPositions[i] = x;
      initialPositions[i + 1] = y;
      initialPositions[i + 2] = z;
    }

    geometry.setAttribute("position", new THREE.BufferAttribute(positions, 3));

    const particleColor = theme === "dark" ? 0x06b6d4 : 0x0284c7;

    const material = new THREE.PointsMaterial({
      color: particleColor,
      size: 0.6,
      transparent: true,
      opacity: theme === "dark" ? 0.8 : 0.6,
      blending: THREE.AdditiveBlending,
    });

    const particles = new THREE.Points(geometry, material);
    scene.add(particles);

    // Connecting Lines
    const lineMaterial = new THREE.LineBasicMaterial({
      color: particleColor,
      transparent: true,
      opacity: theme === "dark" ? 0.2 : 0.1,
    });

    const lineGeometry = new THREE.BufferGeometry();
    const lineMesh = new THREE.LineSegments(lineGeometry, lineMaterial);
    scene.add(lineMesh);

    // Mouse Tracking in 3D Space
    let targetX = 0;
    let targetY = 0;
    const mouse3D = new THREE.Vector3(999, 999, 0); // Active 3D cursor position

    const handleMouseMove = (event: MouseEvent) => {
      // Normalized Device Coordinates (-1 to +1)
      const ndcX = (event.clientX / window.innerWidth) * 2 - 1;
      const ndcY = -(event.clientY / window.innerHeight) * 2 + 1;

      targetX = ndcX;
      targetY = ndcY;

      // Project 2D screen mouse into 3D world space at z=0 plane
      const vector = new THREE.Vector3(ndcX, ndcY, 0.5);
      vector.unproject(camera);
      const dir = vector.sub(camera.position).normalize();
      const distance = -camera.position.z / dir.z;
      const pos = camera.position.clone().add(dir.multiplyScalar(distance));

      mouse3D.x = pos.x;
      mouse3D.y = pos.y;
    };

    window.addEventListener("mousemove", handleMouseMove);

    const handleResize = () => {
      if (!container) return;
      camera.aspect = container.clientWidth / container.clientHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(container.clientWidth, container.clientHeight);
    };

    window.addEventListener("resize", handleResize);

    // Animation Loop
    let animationFrameId: number;
    let clock = new THREE.Clock();

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);

      const elapsedTime = clock.getElapsedTime();
      const posAttr = geometry.attributes.position;

      // Update individual particles with Wave Motion + Mouse Repulsion
      for (let i = 0; i < particleCount; i++) {
        const i3 = i * 3;
        const initX = initialPositions[i3];
        const initY = initialPositions[i3 + 1];
        const initZ = initialPositions[i3 + 2];

        // 1. Natural floating sine wave baseline
        let targetParticleX = initX + Math.cos(elapsedTime * 0.5 + initY) * 0.6;
        let targetParticleY = initY + Math.sin(elapsedTime * 0.8 + initX) * 0.8;

        // 2. Cursor Repulsion Math (Push particles away when cursor gets close)
        const dx = targetParticleX - mouse3D.x;
        const dy = targetParticleY - mouse3D.y;
        const distToMouse = Math.sqrt(dx * dx + dy * dy);
        const repulsionRadius = 12;

        if (distToMouse < repulsionRadius) {
          const force = (1 - distToMouse / repulsionRadius) * 4; // Push strength
          const angle = Math.atan2(dy, dx);
          targetParticleX += Math.cos(angle) * force;
          targetParticleY += Math.sin(angle) * force;
        }

        // Smoothly lerp towards target position
        const currentX = posAttr.getX(i);
        const currentY = posAttr.getY(i);
        posAttr.setX(i, currentX + (targetParticleX - currentX) * 0.1);
        posAttr.setY(i, currentY + (targetParticleY - currentY) * 0.1);
      }

      posAttr.needsUpdate = true;

      // 3. ENHANCED CAMERA PARALLAX (Range increased to 12 for high visibility)
      camera.position.x += (targetX * 12 - camera.position.x) * 0.05;
      camera.position.y += (targetY * 8 - camera.position.y) * 0.05;
      camera.lookAt(scene.position);

      // Re-calculate connecting lines
      const linePositions = [];
      for (let i = 0; i < particleCount; i++) {
        const x1 = posAttr.getX(i);
        const y1 = posAttr.getY(i);
        const z1 = posAttr.getZ(i);

        for (let j = i + 1; j < particleCount; j++) {
          const x2 = posAttr.getX(j);
          const y2 = posAttr.getY(j);
          const z2 = posAttr.getZ(j);

          const dist = Math.sqrt(
            (x1 - x2) ** 2 + (y1 - y2) ** 2 + (z1 - z2) ** 2,
          );

          if (dist < 12) {
            linePositions.push(x1, y1, z1);
            linePositions.push(x2, y2, z2);
          }
        }
      }

      lineGeometry.setAttribute(
        "position",
        new THREE.Float32BufferAttribute(linePositions, 3),
      );

      renderer.render(scene, camera);
    };

    animate();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("resize", handleResize);
      if (container && renderer.domElement) {
        container.removeChild(renderer.domElement);
      }
      geometry.dispose();
      material.dispose();
      lineGeometry.dispose();
      lineMaterial.dispose();
      renderer.dispose();
    };
  }, [theme]);

  return (
    <div
      ref={containerRef}
      className="absolute inset-0 pointer-events-none z-0 overflow-hidden no-print"
      aria-hidden="true"
    />
  );
};
