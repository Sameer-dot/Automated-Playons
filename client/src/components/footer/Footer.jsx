import './footer.css';

const Footer = () => {
	return (
		// <Footer class='footer bg-dark py-5'>
		// 	<div class='container grid grid-3'>
		// 		<div>
		// 			<h1>Loruki</h1>
		// 			<p>Copyright &copy; 2021</p>
		// 		</div>
		// 		<nav>
		// 			<ul>
		// 				<li>
		// 					<a href='index.html'>Home</a>
		// 				</li>
		// 				<li>
		// 					<a href='Features.html'>Features</a>
		// 				</li>
		// 				<li>
		// 					<a href='docs.html'>Docs</a>
		// 				</li>
		// 			</ul>
		// 		</nav>
		// 		<div class='social'>
		// 			<a href=''>
		// 				<i class='fab fa-github fa-2x'></i>
		// 			</a>
		// 			<a href=''>
		// 				<i class='fab fa-facebook fa-2x'></i>
		// 			</a>
		// 			<a href=''>
		// 				<i class='fab fa-instagram fa-2x'></i>
		// 			</a>
		// 			<a href=''>
		// 				<i class='fab fa-twitter fa-2x'></i>
		// 			</a>
		// 		</div>
		// 	</div>
		// </Footer>
		<div className='footer'>
			<div className='fLists'>
				<div>
					<h1>Automated Playons</h1>
					<p>Copyright &copy; 2022</p>
				</div>
				<ul className='fList'>
					<li className='fListItem'>Model Town</li>
					<li className='fListItem'>DHA</li>
					<li className='fListItem'>Johar Town</li>
					<li className='fListItem'>Cantt</li>
				</ul>
				<ul className='fList'>
					<li className='fListItem'>Cricket </li>
					<li className='fListItem'>Footsall </li>
					<li className='fListItem'>Badminton </li>
					<li className='fListItem'>Hockey </li>
					<li className='fListItem'>PkrnPkrai</li>
				</ul>
				<ul className='fList'>
					<li className='fListItem'>Curtomer Service</li>
					<li className='fListItem'>Payments</li>
					<li className='fListItem'>Accesories</li>
					<li className='fListItem'>Terms & conditions</li>
				</ul>
			</div>
		</div>
	);
};

export default Footer;
