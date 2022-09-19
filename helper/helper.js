export function randomInpute(){
    var text = "";
    var possible = "abcdefghijklmnopqrstuvwxyz";

    for( var i=0; i < 15; i++ )
        text += possible.charAt(Math.floor(Math.random() * possible.length));
        
    return text;
    }

export function randomEmail(){
        var text = "";
        var possible = "abcdefghijklmnopqrstuvwxyz";
      
        for( var i=0; i < 10; i++ )
            text += possible.charAt(Math.floor(Math.random() * possible.length));
              
        return text + '@gmail.com';
        }

        export function randomPassword3(){
          var text = "";
          var possible = "abcdefghijklmnopqrstuvwxyz";
        
          for( var i=0; i < 2; i++ )
              text += possible.charAt(Math.floor(Math.random() * possible.length));
                
          return text + '';
          }

          
