$('#sendinfo').on('click', function(){
    console.error();
    

    var name=$('#name').val();
    var pic = $('#profilePic').val();
    var scores = []
    for (i=1; i<11; i++){
        add= $('#q'+i+'').val();
        scores.push(add)
    }
    
    console.log(name+pic+scores);

    var entry = function(name,profilePic,scores){
        { this.name= name;
            this.photo= profilePic;
            this.scores = scores

        } 
    


    }

    

    


    
})
    
