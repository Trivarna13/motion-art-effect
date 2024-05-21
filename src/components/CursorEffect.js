const CuresorEffect = () => {
	return (
		<div className="relative overflow-hidden box-border pt-24">
			<div className="flex mr-auto ml-auto relative box-border pl-44 pr-44">
				<div className="w-3/5 relative box-border flex">
					<div className="p-2 relative box-border w-full flex flex-wrap content-start">
						<div className="mb-5 relative w-full box-border relative text-left">
							<h2 className="text-purple-200 mb-2 text-4xl font-medium box-border font-sora leading-[60px]">
								Turn Your Cursor Into A Colorful Magic Wand &
								Charm Your Visitors
							</h2>
							<div>
								<p>
									Motion Art for Elementor is a groundbreaking
									plugin that empowers you to effortlessly
									infuse your website with visually stunning
									motion art elements.
								</p>
							</div>
						</div>
						<div className="relative pt-2 box-border">
							<div className="text-transparent bg-rev-custom-gradient rounded-3xl">
								<a
									href="https://codecanyon.net/item/motion-art-for-elementor-wordpress-plugin/48826891"
									target="_blank"
									className="text-xl text-white font-sora font-light pt-5 pr-8 pb-5 pl-8"
								>
									<span className="flex justify-center break-words box-border">
										<span className="flex-grow-0 break-words box-border">
											<span className="flex-grow order-10 inline-block break-words box-border pl-4">
												Purchase From Envato
											</span>
											<span className="ml-5 pr-4">
												<i className="fa-solid fa-arrow-right"></i>
											</span>
										</span>
									</span>
								</a>
							</div>
						</div>
					</div>
				</div>
				<div className="box-border w-2/5 relative flex">
					<div className="flex relative w-full flex-wrap content-center items-center p-2">
						<div className="text-right w-full relative box-border">
							<img
								loading="lazy"
								width="248"
								height="246"
								src={`${process.env.PUBLIC_URL}/assets/motionarteffect-img5.png`}
								alt="Motion Art Effect Cursor"
								className="align-middle inline-block h-auto max-w-full rounded-none shadow-none box-border"
							></img>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default CuresorEffect;
