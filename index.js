function Responsive(){
        var browserZoomLevel = Math.round((window.outerWidth / window.innerWidth) * 100);
        console.log(browserZoomLevel, (window.innerHeight), window.innerWidth)
        var doc = document.getElementById("l1")
        let zoom = (window.innerWidth / 1820) * 100
        console.log(Math.round(zoom))
        doc.style.zoom = `${Math.round(zoom)}%`
}

module.exports = Responsive