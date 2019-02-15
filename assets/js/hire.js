function populateSource()
{
  var html = document.documentElement.innerHTML;
  var pre = document.createElement("pre");
  var source = html
    .replace(/[<>]/g, function(m) { return {'<':'&lt;','>':'&gt;'}[m]})
    // .replace(/((ftp|http|https):\/\/(\w+:{0,1}\w*@)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%@!\-\/]))?)/gi,'<a href="$1">$1</a>') + '\n&lt;/html>';
  document.getElementById('source').innerHTML = source;
}

function viewSource()
{
  document.getElementById('view-source').classList.remove("hidden");
}

function closeSource()
{
  document.getElementById('view-source').classList.add("hidden");
}
