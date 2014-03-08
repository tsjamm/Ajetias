function ajetias_codeToView()
{
	var html_string = document.getElementById("ajetias_html_box").value;
	var javascript_string = '<script language="javascript">' + document.getElementById("ajetias_script_box").value + '</script>';
	var css_string = '<style>' + document.getElementById("ajetias_style_box").value + '</style>';

	var reg_html = new RegExp("</head>","gim");	
	
	//var testreg = html_string.match(reg_html);
	//var testsearchval = html_string.search(reg_html);

	if(html_string.search(reg_html) == -1)html_string = html_string.replace("<body>","<head>"+javascript_string+css_string+"</head><body>");
	else html_string = html_string.replace("</head>", javascript_string + css_string + "</head>");

	var view_iframe_doc = document.getElementById("ajetias_view_iframe").contentDocument || document.getElementById("ajetias_view_iframe").contentWindow.document;
	view_iframe_doc.open('text/html', 'replace');
	view_iframe_doc.write(html_string);
	view_iframe_doc.close();

	//html_string = html_string.replace("<html>","");
	//html_string = html_string.replace("</html>","");
	
	//var newdiv = view_iframe_doc.createElement('div');
	//newdiv.innerHTML = html_string;
	//view_iframe_doc.documentElement.innerHTML = "";
	//view_iframe_doc.documentElement.appendChild(newdiv);


	//This is to create a new iframe and then display
	//var newiframe = document.createElement('iframe');
	//newiframe.src = 'about:blank'; 
	//document.getElementById("ajetias_view_div").appendChild(newiframe);
	//var newiframe_doc = newiframe.contentDocument || newiframe.contentWindow.document;
	//newiframe_doc.open('text/html', 'replace');
	//newiframe_doc.write(html_string);
	//newiframe_doc.close();

	

	//document.getElementById("ajetias_view_div").innerHTML=html_string;


	ajetias_show_black_dim_output();
    
    return false;
}

function ajetias_init()
{
	document.getElementById("ajetias_html_box").value='<html>\n<head>\n<title>this is head</title>\n</head>\n<body>\nthis is body\n<br />\n<button onclick="test();">Test Javascript</button><br />\n<div id="testdiv"></div>\n</body>\n</html>';
	document.getElementById("ajetias_script_box").value='function test()\n{\n\tdocument.getElementById("testdiv").innerHTML="successful";\n}';
	document.getElementById("ajetias_style_box").value='body{color:blue}';
	ajetias_generate_instance_list();
}

function ajetias_download_plain_html(tag)
{
	var filename = document.getElementById("ajetias_html_name_box").value;
	if(filename == '') tag.download = 'plain.html';
	else tag.download = filename;
	tag.href = 'data:text/html;charset=utf-8,' + document.getElementById("ajetias_html_box").value;
}

function ajetias_download_script(tag)
{
	var filename = document.getElementById("ajetias_script_name_box").value;
	if(filename == '') tag.download = 'script.js';
	else tag.download = filename;
	tag.href = 'data:text/html;charset=utf-8,' + document.getElementById("ajetias_script_box").value;
}

function ajetias_download_style(tag)
{
	var filename = document.getElementById("ajetias_style_name_box").value;
	if(filename == '') tag.download = 'style.css';
	else tag.download = filename;
	tag.href = 'data:text/html;charset=utf-8,' + document.getElementById("ajetias_style_box").value;
}

function ajetias_download_output(tag)
{
	var filename = document.getElementById("ajetias_output_name_box").value;
	if(filename == '') tag.download = 'index.html';
	else tag.download = filename;

	var view_iframe_doc = document.getElementById("ajetias_view_iframe").contentDocument || document.getElementById("ajetias_view_iframe").contentWindow.document;
	
	tag.href = 'data:text/html;charset=utf-8,' + escape(view_iframe_doc.documentElement.outerHTML);
}

function ajetias_show_black_dim()
{

	document.getElementById('ajetias_black_dim').style.height="100%";
	document.getElementById('ajetias_black_dim').style.width="100%";
	document.getElementById('ajetias_black_dim').style.top="0px";
	document.getElementById('ajetias_black_dim').style.left="0px";
	document.getElementById('ajetias_black_dim').style.zIndex="50";
	document.getElementById('ajetias_black_dim').style.visibility = "visible";
}

function ajetias_show_black_dim_output()
{

	ajetias_show_black_dim();
	document.getElementById('ajetias_view_iframe').style.display = "inline";
	document.getElementById('ajetias_close_black_dim_button').style.display = "inline";
    return false;
}
function ajetias_show_black_dim_download()
{

	ajetias_show_black_dim();
	document.getElementById('ajetias_download_div').style.display = "inline";
	document.getElementById('ajetias_close_black_dim_button').style.display = "inline";
    return false;
}
function ajetias_remove_black_dim()
{
	document.getElementById('ajetias_black_dim').style.height="0";
	document.getElementById('ajetias_black_dim').style.width="0";
	document.getElementById('ajetias_black_dim').style.top="50%";
	document.getElementById('ajetias_black_dim').style.left="50%";
	document.getElementById('ajetias_black_dim').style.zIndex="-1";
	document.getElementById('ajetias_black_dim').style.visibility = "hidden";
	document.getElementById('ajetias_view_iframe').style.display = "none";
	document.getElementById('ajetias_download_div').style.display = "none";
	document.getElementById('ajetias_save_div').style.display = "none";
	document.getElementById('ajetias_close_black_dim_button').style.display = "none";
    return false;
}

function ajetias_edit_increase_width(tag)
{
	document.getElementById('ajetias_html_div').style.width="15%";
	document.getElementById('ajetias_script_div').style.width="15%";
	document.getElementById('ajetias_css_div').style.width="15%";
	tag.parentNode.style.width="60%";
}

function ajetias_edit_decrease_width()
{
	document.getElementById('ajetias_html_div').style.width="30%";
	document.getElementById('ajetias_script_div').style.width="30%";
	document.getElementById('ajetias_css_div').style.width="30%";
}

function ajetias_LocalStorage()
{

	ajetias_show_black_dim();
	document.getElementById('ajetias_save_div').style.display = "inline";
	document.getElementById('ajetias_close_black_dim_button').style.display = "inline";
    return false;
}

function ajetias_save_instance()
{
var name=document.getElementById("ajetias_localstorage_name_box").value;
	var html_string = document.getElementById("ajetias_html_box").value;
	var javascript_string = document.getElementById("ajetias_script_box").value;
	var css_string = document.getElementById("ajetias_style_box").value;
var content= {'html':html_string,'javascript':javascript_string,'css':css_string}
//localStorage.setItem(name,content);
localStorage[name]=JSON.stringify(content);
//alert(JSON.stringify(content));
ajetias_generate_instance_list();
alert("Instance Saved");
return false;
}

function ajetias_generate_instance_list()
{
var selector=document.getElementById("ajetias_instance_selector");
selector.options.length = 1;
for (var i=0; i<localStorage.length; i++)
{
var name=localStorage.key(i);
var content=localStorage[name];
var option=document.createElement("option");
option.text=name;
selector.add(option,null);
}
}

function ajetias_open_instance()
{
var selector=document.getElementById("ajetias_instance_selector");
//alert(selector.value);
if(selector.value == 'Select a Saved Instance...') alert('Select an Instance First!');
else
{
var stored_data = JSON.parse(localStorage[selector.value]);
document.getElementById("ajetias_html_box").value = stored_data.html;
document.getElementById("ajetias_script_box").value = stored_data.javascript;
document.getElementById("ajetias_style_box").value = stored_data.css;
//alert(JSON.parse(localStorage[selector.value]));
ajetias_remove_black_dim();
}
return false;
}

function ajetias_remove_instance()
{
var selector=document.getElementById("ajetias_instance_selector");
//alert(selector.value);
if(selector.value == 'Select a Saved Instance...') alert('Select an Instance First!');
else
{
localStorage.removeItem(selector.value);
ajetias_generate_instance_list();
alert("Instance Removed");
}
return false;
}