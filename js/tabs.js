function initTabs()
{
	var sets = document.getElementsByTagName("div");
	for (var i = 0; i < sets.length; i++)
	{
		if (sets[i].className.indexOf("tabset") != -1)
		{
			var tabs = [];
			var links = sets[i].getElementsByTagName("a");
			for (var j = 0; j < links.length; j++)
			{
				if (links[j].className.indexOf("tab") != -1)
				{
					tabs.push(links[j]);
					links[j].tabs = tabs;
					var c = document.getElementById(links[j].href.substr(links[j].href.indexOf("#") + 1));

					//reset all tabs on start
					if (c) if (links[j].className.indexOf("activetab") != -1) c.className='tab vis';
					else c.className='tab';

					links[j].onclick = function ()
					{
						var c = document.getElementById(this.href.substr(this.href.indexOf("#") + 1));
						if (c)
						{
							//reset all tabs before change
							for (var i = 0; i < this.tabs.length; i++)
							{
								var tab = document.getElementById(this.tabs[i].href.substr(this.tabs[i].href.indexOf("#") + 1));
								if (tab)
								{
									tab.className='tab';
								}
								this.tabs[i].className = this.tabs[i].className.replace("activetab", "");
							}
							this.className += " activetab";
							c.className='tab vis';
							return false;
						}
					}
				}
			}
		}
	}
}

if (window.addEventListener)
	window.addEventListener("load", initTabs, false);
else if (window.attachEvent && !window.opera)
	window.attachEvent("onload", initTabs);

jQuery(document).ready(function() {
  jQuery("a.contentFour").click(function () {
    elementClick = jQuery(this).attr("href")
    destination = jQuery(elementClick).offset().top;
    jQuery("html:not(:animated),body:not(:animated)").animate({scrollTop: destination}, 1100);
    return false;
  });
});