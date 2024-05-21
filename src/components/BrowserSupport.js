const BrowserSupport = () => {
	return (
		<div className="relative overflow-hidden box-border">
			<div className="flex mr-auto ml-auto relative box-border pl-44 pr-44">
				<div className="relative flex w-full">
					<div className="flex relative w-full flex-wrap content-center items-center bg-transparent bg-apply-custom-gradient justify-center m-5 pt-12 pl-8 pb-12 pr-8 rounded-3xl">
						<div>
							<h2 className="font-sora text-2xl font-medium text-purple-200">
								Supported by All Popular Browsers
							</h2>
						</div>
						<div className="m-8"></div>
						<div>
							<p className="font-outfit text-purple-200 text-center text-lg font-light leading-7 ">
								Rest assured, Motion Art is designed to be
								compatible with all major web browsers.
							</p>
						</div>
						<div className="m-4">
							<img
								loading="lazy"
								src={`${process.env.PUBLIC_URL}/assets/motionarteffect-img8.png`}
								alt="Browsers Logos"
								width="441"
								height="48"
								className="align-middle inline-block h-auto max-w-full rounded-none shadow-none"
							/>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default BrowserSupport;
