const Header = () => {
	return (
		<div className="relative overflow-hidden pt-5 swiper-pagination">
			<div className="max-w-screen-xl mx-auto flex flex-wrap items-center justify-between">
				<div className="p-2 flex-shrink-0">
					<div>
						<a href="">
							<img
								src={`${process.env.PUBLIC_URL}/assets/MotionArtEffect-logo.png`}
								alt="Motion Art Effect Logo"
								width="220"
								height="52"
								className="h-auto max-w-full rounded-none shadow-none border-none"
							/>
						</a>
					</div>
				</div>
				<div className="p-2 flex-grow flex justify-end">
					<div>
						<a
							href="https://codecanyon.net/item/motion-art-for-elementor-wordpress-plugin/48826891"
							target="_blank"
							className="text-lg font-normal text-gray-900 bg-white border-solid border-2 border-white rounded pt-4 pl-8 pb-4 pr-8 w-auto"
						>
							Purchase Now
						</a>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Header;
