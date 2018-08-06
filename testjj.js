var scene = new THREE.Scene();
var camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
var renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);
var geos = [
   ['1', '2', '3', '4', '5', '6', '7', '8', '1', '2', '3', '4', '5', '6', '7', '8', ]
   , ['1', '2', '3', '4', '5', '6', '7', '8', '1', '2', '3', '4', '5', '6', '7', '8']
   , ['1', '2', '3', '4', '5', '6', '7', '8', '1', '2', '3', '4', '5', '6', '7', '8']
   , ['1', '2', '3', '4', '5', '6', '7', '8', '1', '2', '3', '4', '5', '6', '7', '8']
, ];
var colors = ['#1ACE90', '#46C3B2', '#505050'];
planes = [];
level = 1;
var inc = 360 / 16
var radius = 7.5;
geos.forEach(function (group, k) {
    tmp = []
    group.forEach(function (val, key) {
        var geometry = new THREE.PlaneGeometry(2, 2);
        var material = new THREE.MeshBasicMaterial({
            color: colors[k]
            , side: THREE.DoubleSide
        });
        var plane = new THREE.Mesh(geometry, material);
        if (level % 2 == 0) {
            var offset = 22.5;
        }
        else {
            var offset = 90;
        }
        var x = ((Math.cos(((inc * key) - offset) * Math.PI / 180)) * (radius * level));
        var y = ((Math.sin(((inc * key) - offset) * Math.PI / 180)) * (radius * level));
        plane.position.x = x;
        plane.position.y = y;
        tmp.push(plane);
    });
    planes.push(tmp);
    level++;
})
slides = []
planes.forEach(function (g) {
    slide = new THREE.Object3D();
    g.forEach(function (p) {
        slide.add(p);
    });
    slides.push(slide);
})
var pivot = new THREE.Group();
scene.add(pivot);
slides.forEach(function (s) {
    pivot.add(s);
})
camera.position.z = 50;
renderer.setClearColor(0xe6e6e6);
var animate = function () {
    requestAnimationFrame(animate);
    slides.forEach(function (s, key) {
        if (isEven(key)) {
            s.rotation.z -= 0.01;
        }
        else {
            s.rotation.z += 0.01;
        }
    });
    planes.forEach(function (g, key) {
            g.forEach(function (p, k) {
                if (isEven(key)) {
                    p.rotation.z += 0.01;
                }
                else {
                    p.rotation.z -= 0.01;
                }
            })
        })
        //    side1.rotation.z += 0.01;
    renderer.render(scene, camera);
};
var isEven = function (number) {
    return number % 2 == 0;
}
animate();