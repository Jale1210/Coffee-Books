$(()=>{
    $("form").validate({
        rules: {
            telephone:{
                required:true,
                phoneAZ: true
            }
        },
        messages: {
            telephone:{
                required: 'Write down the phone',
                phoneAZ: 'Write down the correct number'
            }
        }
    });
    $('[name="telephone"]').inputmask({"mask": "(099) 999-9999"});


    function validateForm(){
        let name = document.forms["f1"]["name"].value;
        let email = document.forms["f1"]["email"].value;
        if (name==""){
            document.getElementById("name").innerHTML = "Please fill the form";
            return false;}
        if (email == "") {
            document.getElementById("message").innerHTML = "Please fill the form";
            return false;
        }
    }
    $('.img-parallax').each(function(){
        let img = $(this);
        let imgParent = $(this).parent();
        function parallaxImg () {
            let speed = img.data('speed');
            let imgY = imgParent.offset().top;
            let winY = $(this).scrollTop();
            let winH = $(this).height();
            let parentH = imgParent.innerHeight();
                
            let winBottom = winY + winH;

            if (winBottom > imgY && winY < imgY + parentH) {	
                let imgBottom = ((winBottom - imgY) * speed);
                let imgTop = winH + parentH;
                var imgPercent = ((imgBottom / imgTop) * 100) + (50 - (speed * 50));
            }
            img.css({
            top: imgPercent + '%',
            transform: 'translate(-50%, -' + imgPercent + '%)'
            });
        }
        $(document).on({
            scroll: function () {
            parallaxImg();
            }, ready: function () {
            parallaxImg();
            }
        });
    });

}) 

function darkMode() {
    let element = document.body;
    element.classList.toggle("dark-mode");
}
     		 
			let h4 = document.getElementsByTagName("h4");
			let cost = document.getElementsByTagName("h6");
			let item = document.getElementById("item");
			let product = document.getElementById("product");
			let total =  document.getElementById("total");
			let x = 0;
			item.innerHTML = x +' books';
			function Buy(y) {
				x++;
				item.innerHTML = x + ' books';
				product.innerHTML += `${'<br />'}`;
				product.innerHTML +=  `${h4[y].innerText}  ${cost[y].innerText}$`;
			}
			 

			$('.img-parallax').each(function(){
				let img = $(this);
				let imgParent = $(this).parent();
				function parallaxImg () {
					let speed = img.data('speed');
					let imgY = imgParent.offset().top;
					let winY = $(this).scrollTop();
					let winH = $(this).height();
					let parentH = imgParent.innerHeight();
						
					let winBottom = winY + winH;

					if (winBottom > imgY && winY < imgY + parentH) {	
						var imgBottom = ((winBottom - imgY) * speed);
						var imgTop = winH + parentH;
						var imgPercent = ((imgBottom / imgTop) * 100) + (50 - (speed * 50));
					}
					img.css({
					top: imgPercent + '%',
					transform: 'translate(-50%, -' + imgPercent + '%)'
					});
				}
				$(document).on({
					scroll: function () {
					parallaxImg();
					}, ready: function () {
					parallaxImg();
					}
				});
			});

			function changeColor(x) {
  				x.classList.toggle("fa-thumbs-down");
			}

			filterSelection("all") 
			function filterSelection(c) {
			var x, i;
			x = document.getElementsByClassName("column");
			if (c == "all") c = "";
		
			for (i = 0; i < x.length; i++) {
				w3RemoveClass(x[i], "show");
				if (x[i].className.indexOf(c) > -1) w3AddClass(x[i], "show");
				}
			}

			// Show filtered elements
			function w3AddClass(element, name) {
				let i, arr1, arr2;
				arr1 = element.className.split(" ");
				arr2 = name.split(" ");
				for (i = 0; i < arr2.length; i++) {
				if (arr1.indexOf(arr2[i]) == -1) {
				element.className += " " + arr2[i];
				}
				}
			}

			// Hide elements that are not selected
			function w3RemoveClass(element, name) {
				var i, arr1, arr2;
				arr1 = element.className.split(" ");
				arr2 = name.split(" ");
				for (i = 0; i < arr2.length; i++) {
				while (arr1.indexOf(arr2[i]) > -1) {
				arr1.splice(arr1.indexOf(arr2[i]), 1);
				}
			}
			element.className = arr1.join(" ");
			}
            
            $('.img-parallax').each(function(){
                let img = $(this);
                let imgParent = $(this).parent();
                function parallaxImg () {
                    let speed = img.data('speed');
                    let imgY = imgParent.offset().top;
                    let winY = $(this).scrollTop();
                    let winH = $(this).height();
                    let parentH = imgParent.innerHeight();
                        
                    let winBottom = winY + winH;
    
                    if (winBottom > imgY && winY < imgY + parentH) {	
                        var imgBottom = ((winBottom - imgY) * speed);
                        var imgTop = winH + parentH;
                        var imgPercent = ((imgBottom / imgTop) * 100) + (50 - (speed * 50));
                    }
                    img.css({
                    top: imgPercent + '%',
                    transform: 'translate(-50%, -' + imgPercent + '%)'
                    });
                }
                $(document).on({
                    scroll: function () {
                    parallaxImg();
                    }, ready: function () {
                    parallaxImg();
                    }
                });
            });