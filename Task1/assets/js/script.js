var popBtn = document.getElementById('popBtn');
var bannerBtn = document.getElementById('bannerBtn');
var nativeBtn = document.getElementById('nativeBtn');
var skimBtn = document.getElementById('skimBtn');

var pop = document.getElementById('pop');
var banner = document.getElementById('banner');
var native = document.getElementById('native');
var skim = document.getElementById('skim');

popBtn.onclick = function ()
{
    event.preventDefault();
    pop.setAttribute('class', 'row');
    banner.setAttribute('class', 'row d-none');
    native.setAttribute('class', 'row d-none');
    skim.setAttribute('class', 'row d-none');
}
bannerBtn.onclick = function ()
{
    event.preventDefault();
    pop.setAttribute('class', 'row d-none');
    banner.setAttribute('class', 'row');
    native.setAttribute('class', 'row d-none');
    skim.setAttribute('class', 'row d-none');
}
nativeBtn.onclick = function ()
{
    event.preventDefault();
    pop.setAttribute('class', 'row d-none');
    banner.setAttribute('class', 'row d-none');
    native.setAttribute('class', 'row');
    skim.setAttribute('class', 'row d-none');
}
skimBtn.onclick = function ()
{
    event.preventDefault();
    pop.setAttribute('class', 'row d-none');
    banner.setAttribute('class', 'row d-none');
    native.setAttribute('class', 'row d-none');
    skim.setAttribute('class', 'row');
}