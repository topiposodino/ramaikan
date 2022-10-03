$("img").on("error", function () {
	$(this).hide();
});
var images = document.getElementsByTagName('img');
for (var i = 0; i < images.length; i++) {
	images[i].src = images[i].src.replace("https://1.bp.blogspot.com/", "https://4.bp.blogspot.com/");
};
var images = document.querySelectorAll('img');
for (var i = 0; i < images.length; i++) {
	images[i].onerror = function () {
		this.src =
			'https://user-images.githubusercontent.com/26896268/164934653-12271c03-44af-4354-a573-4450d0a6d6a4.jpg';
	}
}