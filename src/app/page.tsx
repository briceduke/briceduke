"use client";

import Galaxy from "@/components/Galaxy";
import { Button } from "@/components/ui/button";
import { OrbitControls, PerspectiveCamera } from "@react-three/drei";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { ArrowDown, GithubIcon, LinkedinIcon, MoonIcon, SunIcon, TwitterIcon } from 'lucide-react';
import { useTheme } from "next-themes";
import { Suspense } from "react";
import { Vector3 } from "three";

function Rig() {
  const { camera, pointer } = useThree()
  const vec = new Vector3()

  return useFrame(() => {
    camera.position.lerp(vec.set(pointer.x, pointer.y, camera.position.z), 0.005)
    camera.lookAt(0, 0, 0)
  })
}

export default function Home() {
  const { setTheme, theme } = useTheme();

  return (
    <main className="flex px-64 h-screen w-screen justify-between py-24">
      <section className="flex flex-col justify-between">
        <div>
          <h1 className="text-xl font-extrabold tracking-tight scroll-m-20 lg:text-7xl">
            Brice Duke
          </h1>
          <p className="text-sm text-muted-foreground">Software Engineer & Student</p>
        </div>


        <div className="flex gap-4 items-center">
          <Button size={'icon'} onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}>
            {theme === 'dark' ? (
              <SunIcon className="h-4 w-4" />
            ) : (
              <MoonIcon className="h-4 w-4" />
            )}
          </Button>

          <Button size="icon">
            <GithubIcon className="h-4 w-4" />
          </Button>

          <Button size="icon">
            <LinkedinIcon className="h-4 w-4" />
          </Button>
        </div>
      </section>

      <section className="flex flex-col justify-end items-end">
        <Button variant={'link'} size={'lg'}>
          <h3 className="scroll-m-20 text-2xl font-semibold tracking-tight">
            Projects
          </h3>
          <ArrowDown className="ml-2 h-4 w-4" />
        </Button>
      </section>

      <div className="absolute inset-0 w-screen h-screen invert-[80%] dark:invert-[30%] -z-10">
        <Suspense fallback={null}>
          <Canvas >
            <Galaxy />
            <PerspectiveCamera makeDefault position={[4, 4, 0]} zoom={2} />
            <OrbitControls autoRotate autoRotateSpeed={0.2} enableZoom={false} />
            {/* <Rig /> */}
          </Canvas>
        </Suspense>
      </div>
    </main>
  )
}
