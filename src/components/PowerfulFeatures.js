const PowerfulFeatures = () => {
	return (
		<div className="relative overflow-hidden box-border pt-24 pb-24">
			<div className="flex mr-auto ml-auto relative box-border pl-44 pr-44 flex-col">
				<div className="relative w-full flex border-box flex-col">
					<div className="flex content-center items-center justify-center p-2 relative w-full flex-wrap">
						<div className="w-3/5 relative mb-5 text-center">
							<h2 className="text-white mb-2 text-4xl font-medium box-border font-sora leading-[60px]">
								An All-Round Plugin With Powerful Features
							</h2>
							<div className="inline-block w-full text-base leading-6 box-border">
								<p className="text-lg text-purple-200 font-outfit font-light leading-7 m-0">
									Whether you're a seasoned web designer or
									just starting out, Motion Art for Elementor
									seamlessly integrates with the Elementor
									platform, providing you with a seamless and
									intuitive experience.
								</p>
							</div>
						</div>
					</div>
					<div className="relative pt-12 w-full border-box">
						<div className="flex m-auto p-auto relative border-box">
							<div className="relative flex border-box w-1/3">
								<div className="flex relative flex-wrap content-start rounded-3xl bg-apply-custom-gradient bg-transparent m-2 pt-8 pr-8 pb-10 pl-8">
									<div>
										<img
											src={`${process.env.PUBLIC_URL}/assets/motionarteffect-img9.png`}
											alt="Lightning"
											width="188"
											height="188"
										/>
									</div>
									<div>
										<div>
											<div>
												<h2 className="font-sora text-2xl font-medium text-white mb-4">
													Light Weight
												</h2>
												<div>
													<p className="text-lg text-purple-200 font-outfit font-light leading-7 m-0">
														Motion Art for Elementor
														is designed to be
														lightweight.
													</p>
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
							<div className="relative flex border-box w-1/3">
								<div className="flex relative flex-wrap content-start rounded-3xl bg-apply-custom-gradient bg-transparent m-2 pt-8 pr-8 pb-10 pl-8">
									<div>
										<img
											src={`${process.env.PUBLIC_URL}/assets/motionarteffect-img6.png`}
											alt="Thumb"
											width="188"
											height="188"
										/>
									</div>
									<div>
										<div>
											<div>
												<h2 className="font-sora text-2xl font-medium text-white mb-4">
													100% Responsive
												</h2>
												<div>
													<p className="text-lg text-purple-200 font-outfit font-light leading-7 m-0">
														Create a consistent
														visual experience across
														all devices.
													</p>
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
							<div className="relative flex border-box w-1/3">
								<div className="flex relative flex-wrap content-start rounded-3xl bg-apply-custom-gradient bg-transparent m-2 pt-8 pr-8 pb-10 pl-8">
									<div>
										<img
											src={`${process.env.PUBLIC_URL}/assets/motionarteffect-img7.png`}
											alt="Moon"
											width="188"
											height="188"
										/>
									</div>
									<div>
										<div>
											<div>
												<h2 className="font-sora text-2xl font-medium text-white mb-4">
													User Friendly Interface
												</h2>
												<div>
													<p className="text-lg text-purple-200 font-outfit font-light leading-7 m-0">
														Ensure a smooth
														experience for both
														applicants and
														administrators.
													</p>
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default PowerfulFeatures;
