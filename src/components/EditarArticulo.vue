<template>
  <v-container>
    <v-row class="text-center">    
      <v-col class="mb-4">
        <h1 class="display-2 font-weight-bold mb-3">Formulario de EDICIÓN</h1>       
      </v-col>     
    </v-row>
    <v-row>
        <v-col>         
            <form v-on:submit.prevent="guardarArticulo()">
            <v-text-field
                v-model="articulo.descripcion"        
                label="Descripción"        
                outlined
                required       
            ></v-text-field>
            <v-text-field
                v-model="articulo.precio"        
                label="Precio"
                type="number"                
                prefix="$"
                outlined
                required        
            ></v-text-field>
            <v-text-field
                v-model="articulo.stock"        
                label="Stock"
                type="number"
                outlined
                required        
            ></v-text-field>
            <v-card-actions>
            <v-btn color="warning" class="mr-4" type="submit">Guardar</v-btn>      
            </v-card-actions>
            </form>         
        </v-col>
    </v-row>
  </v-container>
</template>

<script>
import axios from 'axios';
export default {
    name:'editarArticulo',
    mounted(){
      this.id = this.$route.params.id;
      console.log(this.$route);
      axios.get('http://localhost/apirest/articulos?id='+this.id)
      .then(r =>{
        this.articulo = r.data;
      })
      .catch(function(error){
        console.log(error);
      });
    },
    data(){
      return{
        id:null,
        articulo:{
          descripcion:'',
          precio:'',
          stock:''
        }
      }
    },
    methods:{
      guardarArticulo(){
         var router =  this.$router;
        axios.put('http://localhost/apirest/articulos?id='+this.id+'&descripcion='+this.articulo.descripcion+'&precio='+this.articulo.precio+'&stock='+this.articulo.stock)
        .then(function(){
           router.push('/articulos'); 
        })
        .catch(function(error){
        console.log(error);
        });
      }
    }
}
</script>