<script src="https://cdnjs.cloudflare.com/ajax/libs/three.js/r120/three.min.js"></script>
<script src="https://cdn.jsdelivr.net/gh/mrdoob/three.js@r92/examples/js/loaders/GLTFLoader.js"></script>
<script>
    let scene, camera, render
    var mouseX = 0, mouseY = 0;

	var windowHalfX = window.innerWidth / 2;
	var windowHalfY = window.innerHeight / 2;

function init() {

    const canvas = document.querySelector('#c');
    scene = new THREE.Scene()
    scene.background = new THREE.Color(0x263354)

    camera = new THREE.PerspectiveCamera(40, window.innerWidth/window.innerHeight,1,5000)
    camera.rotation.y = 15/180*Math.PI
    camera.rotation.x = 10/180*Math.PI
    camera.position.x = 50
    camera.position.y = 400
    camera.position.z = 500



    hlight = new THREE.AmbientLight(0x404040, 9)
    scene.add(hlight)

    directionalLight = new THREE.DirectionalLight(0xffffff, 9)
    directionalLight.position.set(0,1,0)
    directionalLight.castShadow = true
    scene.add(directionalLight)

    light = new THREE.PointLight(0xc4c4cc4, 2)
    light.position.set(0, 300, 500)
    scene.add(light)

    light2 = new THREE.PointLight(0xc4c4cc4, 2)
    light.position.set(500, 100, 0)
    scene.add(light2)

    light3 = new THREE.PointLight(0xc4c4cc4, 2)
    light.position.set(0, 100, -500)
    scene.add(light3)

    light4 = new THREE.PointLight(0xc4c4cc4, 2)
    light.position.set(-5000, 300, 0)
    scene.add(light4)

    renderer = new THREE.WebGLRenderer({canvas, antialias: true})

    renderer.setSize(window.innerWidth, window.innerHeight)
    
    //controls = new THREE.OrbitControls(camera, renderer.domElement);
                document.addEventListener( 'mousemove', onDocumentMouseMove, false );
				document.addEventListener( 'touchstart', onDocumentTouchStart, false );
				document.addEventListener( 'touchmove', onDocumentTouchMove, false );


				window.addEventListener( 'resize', onWindowResize, false );

    let loader = new THREE.GLTFLoader()
    loader.load('https://raw.githubusercontent.com/shlimmer/beerfest3/main/scene.gltf', function(gltf){
        car = gltf.scene.children[0]
        car.scale.set(1.1, 1.1, 1.1)
        scene.add(gltf.scene)
        animate();

    })
}

//=======================добавил===========================
            function onWindowResize() {

				windowHalfX = window.innerWidth / 2;
				windowHalfY = window.innerHeight / 2;

				camera.aspect = window.innerWidth / window.innerHeight;
				camera.updateProjectionMatrix();

				renderer.setSize( window.innerWidth, window.innerHeight );

			}

			//

			function onDocumentMouseMove( event ) {

				mouseX = event.clientX - windowHalfX;
				mouseY = event.clientY - windowHalfY;

			}

			function onDocumentTouchStart( event ) {

				if ( event.touches.length === 1 ) {

					event.preventDefault();

					mouseX = event.touches[ 0 ].pageX - windowHalfX;
					mouseY = event.touches[ 0 ].pageY - windowHalfY;

				}

			}

			function onDocumentTouchMove( event ) {

				if ( event.touches.length === 1 ) {

					event.preventDefault();

					mouseX = event.touches[ 0 ].pageX - windowHalfX;
					mouseY = event.touches[ 0 ].pageY - windowHalfY;

				}

			}



function animate() {
    
	
                camera.position.x += ( mouseX - camera.position.x ) * .005;
				camera.position.y += ( - mouseY - camera.position.y ) * .005;
				camera.lookAt( 0, 100, 140 );
    renderer.render(scene,camera);
    requestAnimationFrame(animate);
  }
init()
</script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/three.js/r120/three.min.js"></script>
<script src="https://cdn.jsdelivr.net/gh/mrdoob/three.js@r92/examples/js/loaders/GLTFLoader.js"></script>
<script>
    let scene, camera, render
    var mouseX = 0, mouseY = 0;

	var windowHalfX = window.innerWidth / 2;
	var windowHalfY = window.innerHeight / 2;

function init() {

    const canvas = document.querySelector('#c');
    scene = new THREE.Scene()
    scene.background = new THREE.Color(0x263354)

    camera = new THREE.PerspectiveCamera(40, window.innerWidth/window.innerHeight,1,5000)
    camera.rotation.y = 15/180*Math.PI
    camera.rotation.x = 10/180*Math.PI
    camera.position.x = 50
    camera.position.y = 400
    camera.position.z = 500



    hlight = new THREE.AmbientLight(0x404040, 9)
    scene.add(hlight)

    directionalLight = new THREE.DirectionalLight(0xffffff, 9)
    directionalLight.position.set(0,1,0)
    directionalLight.castShadow = true
    scene.add(directionalLight)

    light = new THREE.PointLight(0xc4c4cc4, 2)
    light.position.set(0, 300, 500)
    scene.add(light)

    light2 = new THREE.PointLight(0xc4c4cc4, 2)
    light.position.set(500, 100, 0)
    scene.add(light2)

    light3 = new THREE.PointLight(0xc4c4cc4, 2)
    light.position.set(0, 100, -500)
    scene.add(light3)

    light4 = new THREE.PointLight(0xc4c4cc4, 2)
    light.position.set(-5000, 300, 0)
    scene.add(light4)

    renderer = new THREE.WebGLRenderer({canvas, antialias: true})

    renderer.setSize(window.innerWidth, window.innerHeight)
    
    //controls = new THREE.OrbitControls(camera, renderer.domElement);
                document.addEventListener( 'mousemove', onDocumentMouseMove, false );
				document.addEventListener( 'touchstart', onDocumentTouchStart, false );
				document.addEventListener( 'touchmove', onDocumentTouchMove, false );


				window.addEventListener( 'resize', onWindowResize, false );

    let loader = new THREE.GLTFLoader()
    loader.load('https://raw.githubusercontent.com/shlimmer/beerfest3/main/scene.gltf', function(gltf){
        car = gltf.scene.children[0]
        car.scale.set(1.1, 1.1, 1.1)
        scene.add(gltf.scene)
        animate();

    })
}

//=======================добавил===========================
            function onWindowResize() {

				windowHalfX = window.innerWidth / 2;
				windowHalfY = window.innerHeight / 2;

				camera.aspect = window.innerWidth / window.innerHeight;
				camera.updateProjectionMatrix();

				renderer.setSize( window.innerWidth, window.innerHeight );

			}

			//

			function onDocumentMouseMove( event ) {

				mouseX = event.clientX - windowHalfX;
				mouseY = event.clientY - windowHalfY;

			}

			function onDocumentTouchStart( event ) {

				if ( event.touches.length === 1 ) {

					event.preventDefault();

					mouseX = event.touches[ 0 ].pageX - windowHalfX;
					mouseY = event.touches[ 0 ].pageY - windowHalfY;

				}

			}

			function onDocumentTouchMove( event ) {

				if ( event.touches.length === 1 ) {

					event.preventDefault();

					mouseX = event.touches[ 0 ].pageX - windowHalfX;
					mouseY = event.touches[ 0 ].pageY - windowHalfY;

				}

			}



function animate() {
    
	
                camera.position.x += ( mouseX - camera.position.x ) * .005;
				camera.position.y += ( - mouseY - camera.position.y ) * .005;
				camera.lookAt( 0, 100, 140 );
    renderer.render(scene,camera);
    requestAnimationFrame(animate);
  }
init()
</script>
HEADER


Переадресация на URL: /klin-may-fest-2022



<canvas id="c"></canvas>


КЛИНМАЙФЕСТФЕСТИВАЛЬ РЕМЕСЛЕННЫХ ПИВОВАРЕН28 АВГУСТА 2021



КЛИНМАЙФЕСТ
ФЕСТИВАЛЬ РЕМЕСЛЕННЫХ ПИВОВАРЕН
ВХОД БЕСПЛАТНЫЙ!

28 августа 2021 | СУББОТА
12.00 – 20.00
СЕСТРОРЕЦКИЙ ПАРК Г. КЛИН



<script src="https://cdnjs.cloudflare.com/ajax/libs/three.js/r120/three.min.js"></script>
<script src="https://cdn.jsdelivr.net/gh/mrdoob/three.js@r92/examples/js/loaders/GLTFLoader.js"></script>
<script>
    let scene, camera, render
    var mouseX = 0, mouseY = 0;

	var windowHalfX = window.innerWidth / 2;
	var windowHalfY = window.innerHeight / 2;

function init() {

    const canvas = document.querySelector('#c');
    scene = new THREE.Scene()
    scene.background = new THREE.Color(0x263354)

    camera = new THREE.PerspectiveCamera(40, window.innerWidth/window.innerHeight,1,5000)
    camera.rotation.y = 15/180*Math.PI
    camera.rotation.x = 10/180*Math.PI
    camera.position.x = 50
    camera.position.y = 400
    camera.position.z = 500



    hlight = new THREE.AmbientLight(0x404040, 9)
    scene.add(hlight)

    directionalLight = new THREE.DirectionalLight(0xffffff, 9)
    directionalLight.position.set(0,1,0)
    directionalLight.castShadow = true
    scene.add(directionalLight)

    light = new THREE.PointLight(0xc4c4cc4, 2)
    light.position.set(0, 300, 500)
    scene.add(light)

    light2 = new THREE.PointLight(0xc4c4cc4, 2)
    light.position.set(500, 100, 0)
    scene.add(light2)

    light3 = new THREE.PointLight(0xc4c4cc4, 2)
    light.position.set(0, 100, -500)
    scene.add(light3)

    light4 = new THREE.PointLight(0xc4c4cc4, 2)
    light.position.set(-5000, 300, 0)
    scene.add(light4)

    renderer = new THREE.WebGLRenderer({canvas, antialias: true})

    renderer.setSize(window.innerWidth, window.innerHeight)
    
    //controls = new THREE.OrbitControls(camera, renderer.domElement);
                document.addEventListener( 'mousemove', onDocumentMouseMove, false );
				document.addEventListener( 'touchstart', onDocumentTouchStart, false );
				document.addEventListener( 'touchmove', onDocumentTouchMove, false );


				window.addEventListener( 'resize', onWindowResize, false );

    let loader = new THREE.GLTFLoader()
    loader.load('https://raw.githubusercontent.com/shlimmer/beerfest3/main/scene.gltf', function(gltf){
        car = gltf.scene.children[0]
        car.scale.set(1.1, 1.1, 1.1)
        scene.add(gltf.scene)
        animate();

    })
}

//=======================добавил===========================
            function onWindowResize() {

				windowHalfX = window.innerWidth / 2;
				windowHalfY = window.innerHeight / 2;

				camera.aspect = window.innerWidth / window.innerHeight;
				camera.updateProjectionMatrix();

				renderer.setSize( window.innerWidth, window.innerHeight );

			}

			//

			function onDocumentMouseMove( event ) {

				mouseX = event.clientX - windowHalfX;
				mouseY = event.clientY - windowHalfY;

			}

			function onDocumentTouchStart( event ) {

				if ( event.touches.length === 1 ) {

					event.preventDefault();

					mouseX = event.touches[ 0 ].pageX - windowHalfX;
					mouseY = event.touches[ 0 ].pageY - windowHalfY;

				}

			}

			function onDocumentTouchMove( event ) {

				if ( event.touches.length === 1 ) {

					event.preventDefault();

					mouseX = event.touches[ 0 ].pageX - windowHalfX;
					mouseY = event.touches[ 0 ].pageY - windowHalfY;

				}

			}



function animate() {
    
	
                camera.position.x += ( mouseX - camera.position.x ) * .005;
				camera.position.y += ( - mouseY - camera.position.y ) * .005;
				camera.lookAt( 0, 100, 140 );
    renderer.render(scene,camera);
    requestAnimationFrame(animate);
  }
init()
</script>
Код будет выполнен на опубликованной странице (нажмите «Опубликовать» в правом верхнем углу)

<script src="https://cdnjs.cloudflare.com/ajax/libs/three.js/r120/three.min.js"></script>
<script src="https://cdn.jsdelivr.net/gh/mrdoob/three.js@r92/examples/js/loaders/GLTFLoader.js"></script>
<script>
    let scene, camera, render
    var mouseX = 0, mouseY = 0;

	var windowHalfX = window.innerWidth / 2;
	var windowHalfY = window.innerHeight / 2;

function init() {

    const canvas = document.querySelector('#c');
    scene = new THREE.Scene()
    scene.background = new THREE.Color(0x263354)

    camera = new THREE.PerspectiveCamera(40, window.innerWidth/window.innerHeight,1,5000)
    camera.rotation.y = 15/180*Math.PI
    camera.rotation.x = -10/180*Math.PI
    camera.position.x = 0
    camera.position.y = -500
    camera.position.z = 900



    hlight = new THREE.AmbientLight(0x404040, 9)
    scene.add(hlight)

    directionalLight = new THREE.DirectionalLight(0xffffff, 9)
    directionalLight.position.set(0,1,0)
    directionalLight.castShadow = true
    scene.add(directionalLight)

    light = new THREE.PointLight(0xc4c4cc4, 2)
    light.position.set(0, 300, 500)
    scene.add(light)

    light2 = new THREE.PointLight(0xc4c4cc4, 2)
    light.position.set(500, 100, 0)
    scene.add(light2)

    light3 = new THREE.PointLight(0xc4c4cc4, 2)
    light.position.set(0, 100, -500)
    scene.add(light3)

    light4 = new THREE.PointLight(0xc4c4cc4, 2)
    light.position.set(-5000, 300, 0)
    scene.add(light4)

    renderer = new THREE.WebGLRenderer({canvas, antialias: true})

    renderer.setSize(window.innerWidth, window.innerHeight)
    
    //controls = new THREE.OrbitControls(camera, renderer.domElement);
                document.addEventListener( 'mousemove', onDocumentMouseMove, false );
				document.addEventListener( 'touchstart', onDocumentTouchStart, false );
				document.addEventListener( 'touchmove', onDocumentTouchMove, false );


				window.addEventListener( 'resize', onWindowResize, false );

    let loader = new THREE.GLTFLoader()
    loader.load('https://raw.githubusercontent.com/shlimmer/beerfest2/main/scene.gltf', function(gltf){
        car = gltf.scene.children[0]
        car.scale.set(1.1, 1.1, 1.1)
        scene.add(gltf.scene)
        animate();

    })
}

//=======================добавил===========================
            function onWindowResize() {

				windowHalfX = window.innerWidth / 2;
				windowHalfY = window.innerHeight / 2;

				camera.aspect = window.innerWidth / window.innerHeight;
				camera.updateProjectionMatrix();

				renderer.setSize( window.innerWidth, window.innerHeight );

			}

			//

			function onDocumentMouseMove( event ) {

				mouseX = event.clientX - windowHalfX;
				mouseY = event.clientY - windowHalfY;

			}

			function onDocumentTouchStart( event ) {

				if ( event.touches.length === 1 ) {

					event.preventDefault();

					mouseX = event.touches[ 0 ].pageX - windowHalfX;
					mouseY = event.touches[ 0 ].pageY - windowHalfY;

				}

			}

			function onDocumentTouchMove( event ) {

				if ( event.touches.length === 1 ) {

					event.preventDefault();

					mouseX = event.touches[ 0 ].pageX - windowHalfX;
					mouseY = event.touches[ 0 ].pageY - windowHalfY;

				}

			}



function animate() {
    
	
                camera.position.x += ( mouseX - camera.position.x ) * .02;
				camera.position.y += ( - mouseY - camera.position.y ) * .02;
				camera.lookAt( 0, -100, 70 );
    renderer.render(scene,camera);
    requestAnimationFrame(animate);
  }
init()
</script>

