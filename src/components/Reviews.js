const Reviews = () => {
	return (
		<div className="relative overflow-hidden border-box">
			<div className="flex mr-auto ml-auto relative box-border pl-44 pr-44">
				<div className="relative w-full flex border-box">
					<div className="p-2 flex relative w-full flex-wrap content-start box-border">
						<div className="text-center mb-5 w-full relative box-border">
							<h2 className="p-0 m-0 leading-none text-sm text-lg text-3xl text-6xl text-xl font-normal p-0 m-0 leading-none font-outfit break-words">
								Trusted by thousands of users around the world
							</h2>
						</div>
						<div className="pt-12 w-full relative border-box flex mr-auto ml-auto relative">
							<div className="relative flex ">
								<div className="content-center items-center flex relative w-full flex-wrap box-border">
									<div className="text-left mb-0 flex items-center w-[429.99px] h-[88]">
										<div className="bg-gray-900 rounded-[50px]">
											<img
												src={`${process.env.PUBLIC_URL}/assets/motionarteffect-img2.png`}
												alt="Envato Logo"
												width="88"
												height="88"
												className="align-middle inline-block h-auto max-w-full rounded-none shadow-none box-border"
											></img>
										</div>
										<div>
											<div className="text-purple-200 text-sm font-normal w-auto self-center relative">
												<div className="-mb-4 ml-2 border-box">
													<p className="border-box mb-5 break-words">
														<img
															src={`${process.env.PUBLIC_URL}/assets/motionarteffect-img4.png`}
															alt="star-rating"
															width="155"
															height="20"
															className="h-auto max-w-full rounded-none shadow-none align-middle border-box"
														></img>
													</p>
													<p className="break-words">
														<strong>4.5</strong>{" "}
														Score, 9 Reviews
													</p>
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
							<div className="relative flex ">
								<div className="content-center items-center flex relative w-full flex-wrap box-border">
									<div className="text-left mb-0 flex items-center  w-[429.99px] h-[88]">
										<div className="bg-gray-900 rounded-[50px]">
											<img
												src={`${process.env.PUBLIC_URL}/assets/motionarteffect-img1.png`}
												alt="G2 Logo"
												width="88"
												height="88"
												className="align-middle inline-block h-auto max-w-full rounded-none shadow-none box-border"
											></img>
										</div>
										<div>
											<div className="text-purple-200 text-sm font-normal w-auto self-center relative">
												<div className="-mb-4 ml-2 border-box">
													<p className="border-box mb-5 break-words">
														<img
															src={`${process.env.PUBLIC_URL}/assets/motionarteffect-img4.png`}
															alt="star-rating"
															width="155"
															height="20"
															className="h-auto max-w-full rounded-none shadow-none align-middle border-box"
														></img>
													</p>
													<p className="break-words">
														<strong>4.5</strong>{" "}
														Score, 9 Reviews
													</p>
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
							<div className="relative flex ">
								<div className="content-center items-center flex relative w-full flex-wrap box-border">
									<div className="text-left mb-0 flex items-center  w-[429.99px] h-[88]">
										<div className="bg-gray-900 rounded-[50px]">
											<img
												src={`${process.env.PUBLIC_URL}/assets/motionarteffect-img3.png`}
												alt="WordPress Logo"
												width="88"
												height="88"
												className="align-middle inline-block h-auto max-w-full rounded-none shadow-none box-border"
											></img>
										</div>
										<div>
											<div className="text-purple-200 text-sm font-normal w-auto self-center relative">
												<div className="-mb-4 ml-2 border-box">
													<p className="border-box mb-5 break-words">
														<img
															src={`${process.env.PUBLIC_URL}/assets/motionarteffect-img4.png`}
															alt="star-rating"
															width="155"
															height="20"
															className="h-auto max-w-full rounded-none shadow-none align-middle border-box"
														></img>
													</p>
													<p className="break-words">
														<strong>4.5</strong>{" "}
														Score, 9 Reviews
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

export default Reviews;
