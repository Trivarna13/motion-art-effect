const Footer = () => {
	return (
		<div className="pt-2 bg-footer-custom-gradient">
			<div className="flex pl-44 pr-44">
				<div className="w-6/12">
					<div className="flex content-center items-center p-2">
						<p className="text-purple-200 font-outfit font-light m-0">
							© 2023 Copywrite. All rights reserved by QodeMatrix
						</p>
					</div>
				</div>
				<div className="w-6/12">
					<div className="flex justify-end text-right p-2">
						<div className="mr-6">Documentation</div>
						<div>Support</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Footer;
