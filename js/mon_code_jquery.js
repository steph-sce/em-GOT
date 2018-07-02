		$(document).ready(function(){
		
		//********************************************
		// DEBUT ANCRES GO-TO-TOP => TOUTES LES PAGES
		//********************************************
			$('.gotop').click(function(){
				$('html, body').animate({scrollTop : 0},800);
				return false;
			});
		//********************************************
		// FIN ANCRES GO-TO-TOP => TOUTES LES PAGES
		//********************************************
		
		
		//*************************************
		// DEBUT PAGE INDEX => SLIDER BXSLIDER
		//*************************************			
		
			if($('.bxslider').length > 0) //A placer après pour éviter l'erreur du débug. Ici on teste l'existence de la class .bxslider
			{
				$('.bxslider').bxSlider();
			} 
		//**********************************
		// FIN PAGE INDEX => SLIDER BXSLIDER
		//**********************************		
		
		
		//**********************************
		// DEBUT PAGE PERSONNAGES => FILTRE
		//**********************************		
		

		
			if($('#Container').length > 0) //A placer après pour éviter l'erreur du débug. Ici on teste l'existence de l'id #Container
			{		
				$('#Container').mixItUp({
					animation: {
						duration: 1000,
						easing: 'cubic-bezier(0.175, 0.885, 0.32, 1.275)'
					},
					controls: {
						live: true
					}
				});
			}
		//********************************
		// FIN PAGE PERSONNAGES => FILTRE
		//********************************	

		
		//*******************************************
		// DEBUT PAGE CONTACT	=> FORMULAIRE CONTACT
		//*******************************************
		
			$("#contact-form").submit(function(event){
				//alert('test submit');
	
				var nom	 		= $('#nom').val(); 
					email 		= $('#email').val(); 
					sujet 		= $('#sujet').val(); 
					message 	= $('#message').val(); 
					champVide 	= "Merci de bien vouloir remplir le champ : "; 
					verification= true;
				

			function verifChamp(recup_valeur_champ,id_champ,affichage_message,intitule_du_champ)
			{
				if (recup_valeur_champ == "")
				{
					$(id_champ).css("border","solid 1px #FF0000");
					$(affichage_message).html(champVide + intitule_du_champ).show(); 
					verification = false;	//on stoppe le script
				}
				else
				{
					$(id_champ).css("border","solid 1px #cecece");
					$(affichage_message).html(champVide).hide();
				}
			}
			
			verifChamp(nom,'#nom',"#messageNom",'nom');
			verifChamp(email,'#email',"#messageEmail",'email');
			verifChamp(sujet,'#sujet',"#messageSujet",'sujet');
			verifChamp(message,'#message',"#messageMessage",'message');
		

				return verification;	

			});
		//*******************************************
		// FIN PAGE CONTACT	=> FORMULAIRE CONTACT
		//*******************************************
		
		});	
		