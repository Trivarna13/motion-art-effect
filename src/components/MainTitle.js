const MainTitle = () => {
	return (
		<div className="relative pt-20 pb-20">
			<div className="pl-32 flex mr-auto ml-auto relative">
				<div className="flex flex-wrap justify-center md:justify-between">
					<div className="w-full md:w-1/2 lg:w-1/3 flex items-center">
						<div className="flex flex-wrap content-start w-full md:w-auto">
							<div className="pl-4 transition-all duration-300 text-left relative w-full md:w-40">
								<div className="bg-clip-text text-transparent bg-custom-gradient font-medium text-3xl break-words pb-4">
									<span className="text-lg font-medium font-sora">
										Transform <br />
										Your Website
									</span>
								</div>
								<div className="inline-block w-full text-base leading-6 text-purple-200 text-lg font-light font-outfit">
									With Motion Art Effect
								</div>
							</div>
						</div>
					</div>

					<div className="w-full md:w-1/2 lg:w-2/3 pt-8 md:pt-0 flex flex-wrap content-start">
						<div className="w-full relative content-normal">
							<div className="box-border text-left relative">
								<h1 className="text-purple-200 mr-2 mb-4 text-6xl font-medium leading-[85px] font-sora box-border">
									Attract Your <br />
									Visitors Attention With Colorful <br />
									<span className="bg-clip-text text-transparent bg-custom-gradient font-medium text-6xl leading-[85px] font-sora box-border">
										Motion Art Effect
									</span>
								</h1>
							</div>
							<div className="inline-block w-full text-base leading-6 box-border">
								<p className="text-lg font-light mr-24 box-border break-words p-0 font-outfit leading-[1.6em] text-purple-100">
									Unleash the power of creativity with Motion
									Art for Elementor - your ultimate solution
									for seamlessly integrating captivating
									animations into your website.
								</p>
							</div>
						</div>
					</div>
				</div>
				<div className="hidden md:block w-1/3"></div>{" "}
			</div>
		</div>
	);
};

export default MainTitle;
