const ApplySection = () => {
	return (
		<div className="relative overflow-hidden box-border pt-24 pb-24">
			<div className="flex mr-auto ml-auto relative box-border pl-44 pr-44 flex-col">
				<div className="relative w-full flex border-box">
					<div className="flex content-center items-center justify-center p-2 relative w-full flex-wrap">
						<div className="w-3/5 relative mb-5 text-center">
							<h2 className="text-purple-200 mb-2 text-4xl font-medium box-border font-sora leading-[60px]">
								Apply On Any Section Or Enable For Whole Page
							</h2>
						</div>
					</div>
				</div>
				<div className="mt-12 mb-0 w-full box-border">
					<div className="flex mr-auto ml-auto relative box-border">
						<div className="w-6/12 relative flex box-border">
							<div className="flex relative w-full flex-wrap content-start bg-transparent mt-2 mr-2 ml-2 mb-32 p-8 rounded-3xl bg-apply-custom-gradient">
								<div className="relative w-full text-left">
									<h2 className="text-2xl font-medium font-sora mb-2 leading-10">
										Apply On Section
									</h2>
									<div className="inline-block w-full text-base leading-6 box-border">
										<p className="text-lg text-purple-200 font-outfit font-light leading-7 m-0">
											Apply on section is a game-changer,
											offering an unparalleled way to
											manage applications directly from
											your website.
										</p>
									</div>
									<div className="w-full text-center relative">
										<div className="mt-8 border-box">
											<img
												loading="lazy"
												src={`${process.env.PUBLIC_URL}/assets/motionarteffect-img11.png`}
												alt="Section"
												width="552"
												height="357"
												className="align-middle inline-block h-auto max-w-full rounded-none shadow-none"
											></img>
										</div>
									</div>
								</div>
							</div>
						</div>
						<div className="w-6/12 relative flex box-border">
							<div className="flex relative w-full flex-wrap content-start bg-transparent mt-32 mr-2 ml-2 mb-2 p-8 rounded-3xl bg-apply-custom-gradient">
								<div className="flex mr-auto ml-auto relative box-border">
									<div className="flex relative w-full flex-wrap content-start bg-transparent p-4 rounded-3xl ">
										<div className="relative w-full text-left">
											<h2 className="text-2xl font-medium font-sora mb-2 leading-10">
												Apply On Page
											</h2>
											<div className="inline-block w-full text-base leading-6 box-border">
												<p className="text-lg text-purple-200 font-outfit font-light leading-7 m-0">
													Take your website to new
													heights with Motion Art for
													Elementor. Embrace the power
													of motion and animation.
												</p>
											</div>
											<div className="w-full text-center relative">
												<div className="mt-8 border-box">
													<img
														loading="lazy"
														src={`${process.env.PUBLIC_URL}/assets/motionarteffect-img10.png`}
														alt="Section"
														width="552"
														height="357"
														className="align-middle inline-block h-auto max-w-full rounded-none shadow-none"
													></img>
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

export default ApplySection;
