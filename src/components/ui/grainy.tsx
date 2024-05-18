export const Grainy = () => {
	return (
		// biome-ignore lint/a11y/noSvgWithoutTitle: <explanation>
		<svg
			className="z-10 absolute inset-0 w-full h-full pointer-events-none dark:opacity-0 opacity-100 transition-opacity duration-300"
			xmlns="http://www.w3.org/2000/svg"
			version="1.1"
			viewBox="0 0 100% 100%"
			width="100%"
			height="100%"
			opacity="1"
		>
			<defs>
				<filter
					id="nnnoise-filter"
					x="-20%"
					y="-20%"
					width="140%"
					height="140%"
					filterUnits="objectBoundingBox"
					primitiveUnits="userSpaceOnUse"
					color-interpolation-filters="linearRGB"
				>
					<feTurbulence
						type="fractalNoise"
						baseFrequency="0.152"
						numOctaves="4"
						seed="15"
						stitchTiles="stitch"
						x="0%"
						y="0%"
						width="100%"
						height="100%"
						result="turbulence"
					/>
					<feSpecularLighting
						surfaceScale="40"
						specularConstant="1.6"
						specularExponent="20"
						lighting-color="#ffffff"
						x="0%"
						y="0%"
						width="100%"
						height="100%"
						in="turbulence"
						result="specularLighting"
					>
						<feDistantLight azimuth="3" elevation="73" />
					</feSpecularLighting>
				</filter>
			</defs>
			<rect width="100%" height="100%" fill="#ffffff00" />
			<rect
				width="100%"
				height="100%"
				fill="#ffffff"
				filter="url(#nnnoise-filter)"
			/>
		</svg>
	);
};
