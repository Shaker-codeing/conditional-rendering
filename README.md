
#         conditional Rendering

#         ternary operator

            {cart.length === 3 ? <p>Tin jon ke gift deba</p> : <p>kino kino</p>}
 #           and operator
            {cart.length === 2 && <h2>Double items</h2>}

#           if else

              let message;
          if (cart.length === 0) {
           message = <p>Please Buy at lest one item</p>
         }
            else {
           message = <p>Thanks for Buying</p>
           };


#        or operator

            {cart.length === 4 || <P> 4ta item na </P>}