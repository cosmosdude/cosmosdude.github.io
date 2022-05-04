function make_link_to_page(name) {
	var a = document.createElement('a');

	a.innerHTML = name.charAt(0).toUpperCase() + name.slice(1);

	if (name == "about") name = "index";

	a.href = name + ".html";
	a.className = "link"
	return a;
}

function make_separator() {
	// <span class="separator">/</span>
	var span = document.createElement('span');
	span.innerHTML = "/"
	span.className = "separator"
	return span
}

function add_menu_items(obj) {
	var name = obj.of.toLowerCase();
	var menu = obj.to;

	var names = ["about", "experience", "portfolio", "contact"];

	console.log(name);
	names = names.filter(x => x!=name);
	console.log(names);
	for(var i = 0 ; i < names.length; i++) {
		menu.appendChild(make_link_to_page(names[i]));
		if (i+1 != names.length) {
			menu.appendChild(make_separator());
		}
	}
}