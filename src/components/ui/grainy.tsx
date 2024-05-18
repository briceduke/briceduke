export const Grainy = () => {
	return (
		// biome-ignore lint/a11y/noSvgWithoutTitle: <explanation>
		<svg
			xmlns="http://www.w3.org/2000/svg"
			version="1.1"
			xmlnsXlink="http://www.w3.org/1999/xlink"
			className="z-10 absolute inset-0 w-full h-full pointer-events-none dark:opacity-0 opacity-100 transition-opacity duration-300"
		>
			<defs>
				<filter
					id="gggrain-filter"
					x="-20%"
					y="-20%"
					width="140%"
					height="140%"
					filterUnits="objectBoundingBox"
					primitiveUnits="userSpaceOnUse"
					colorInterpolationFilters="sRGB"
				>
					<feTurbulence
						type="fractalNoise"
						baseFrequency="0.55"
						numOctaves="2"
						seed="2"
						stitchTiles="stitch"
						x="0%"
						y="0%"
						width="100%"
						height="100%"
						result="turbulence"
					/>
					<feColorMatrix
						type="saturate"
						values="0"
						x="0%"
						y="0%"
						width="100%"
						height="100%"
						in="turbulence"
						result="colormatrix"
					/>
					<feComponentTransfer
						x="0%"
						y="0%"
						width="100%"
						height="100%"
						in="colormatrix"
						result="componentTransfer"
					>
						<feFuncR type="linear" slope="3" />
						<feFuncG type="linear" slope="3" />
						<feFuncB type="linear" slope="3" />
					</feComponentTransfer>
					<feColorMatrix
						x="0%"
						y="0%"
						width="100%"
						height="100%"
						in="componentTransfer"
						result="colormatrix2"
						type="matrix"
						values="1 0 0 0 0
                                0 1 0 0 0
                                0 0 1 0 0
                                0 0 0 19 -11"
					/>
				</filter>
			</defs>
			<g>
				<rect width="100%" height="100%" fill="url(#gggrain-gradient3)" />
				<rect width="100%" height="100%" fill="url(#gggrain-gradient2)" />
				<rect
					width="100%"
					height="100%"
					fill="transparent"
					filter="url(#gggrain-filter)"
					opacity="0.3"
					style={{ mixBlendMode: "soft-light" }}
				/>
			</g>
		</svg>
	);
};
