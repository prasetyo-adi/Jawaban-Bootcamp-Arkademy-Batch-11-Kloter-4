//Fungsi validasi username
function username (){
	var nama = "Prasetyo";
	pola_username = /^[a-zA-0-9] {5,9}$/;
	if (!pola_username.test(nama)) {
		console.log ("Username minimal 5-9 karakter dan hanya boleh huruf dan angka!");
	}else{
		console.log("Username anda benar!");
	}

}

username();

//Fungsi validasi password
function password (a,b) {
	var pwd = "ababAAA122";
	pola_pwd = /^(? = .*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[#$^+=!*()@%&]).{8,100}$/g;
	if (!pola_pwd.test(pwd)) {
		console.log("Penulisan password tidak benar!");
	}else{
		console.log("Penulisan password benar!");
	}
}

password();

