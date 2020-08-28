<template>
    <v-container>
    <v-row class="text-center">      
      <v-col class="mb-4">
        <h2 class="display-2 font-weight-bold mb-3">
          Listado de Artículos
        </h2>       
      </v-col>        
    </v-row>
    <v-row>
    <v-col class="mb-1">
       <v-btn :to="{name:'crearArticulo'}" class="mx-2" fab dark color="indigo">
         <v-icon dark>mdi-plus</v-icon>
       </v-btn>
    </v-col>
    </v-row>
    <v-row class="text-center">
    <v-col cols="12">
        <v-simple-table fixed-header class="elevation-3">
        <template v-slot:default>
        <thead>
            <tr>
            <th class="text-center">ID</th>
            <th class="text-center">Descripción</th>
            <th class="text-center">Precio</th>
            <th class="text-center">Stock</th>
            <th class="text-center">Acciones</th>
            </tr>
        </thead>
        <tbody>
            <tr v-for="articulo in articulos" :key="articulo.id">
                <td>{{articulo.id}}</td>
                <td>{{articulo.descripcion}}</td>
                <td>{{articulo.precio}}</td>
                <td>{{articulo.stock}}</td>
                <td>
                    <v-btn :to="{name:'editarArticulo', params:{id:articulo.id}}" fab small color="primary"><v-icon>mdi-pencil</v-icon></v-btn>
                    <v-btn @click.stop="dialog=true" @click="id=articulo.id" fab small color="error"><v-icon>mdi-delete</v-icon></v-btn>
                </td>
            </tr>
         </tbody>   
        </template>
        </v-simple-table>
    </v-col>
    </v-row>
    <!-- ventana de diálogo para eliminar registros -->
    <v-dialog v-model="dialog" max-width="350">
        <v-card>
            <v-card-title class="headline">¿Desea eliminar el registro?</v-card-title>
            <v-card-actions>
            <v-spacer></v-spacer>
                <v-btn @click="dialog = false">Cancelar</v-btn>
                <v-btn @click="confirmarBorrado(id)" color="error">Aceptar</v-btn>
            </v-card-actions>
        </v-card>
    </v-dialog>
    <!-- componente snackbar para mostrar mensaje de eliminación -->
    <v-snackbar v-model="snackbar" color="success"> {{textsnack}}
        <template v-slot:action="{attrs}">
            <v-btn text v-bind="attrs" @click="snackbar = false">Cerrar</v-btn>
        </template>
    </v-snackbar>
    </v-container>
</template>
<script>
import axios from 'axios';
export default {
    name:'listarArticulos',
    mounted(){
        this.obtenerArticulos();
    },
    data(){
        return{            
            dialog:false,
            articulos:null,
            id:null,
            snackbar:false,
            textsnack:'¡Registro Eliminado!'
        }
    },
    methods:{
        obtenerArticulos(){
            axios.get('http://localhost/apirest/articulos')
            .then(r => {
                this.articulos = r.data;
                console.log(this.articulos);
            })
            .catch(function(error){
                console.log(error);
            })

        },
        confirmarBorrado(id){            
            axios.delete('http://localhost/apirest/articulos?id='+id)
            .then(()=>{
                    this.obtenerArticulos();
                    this.dialog = false;
                    this.snackbar = true
            })
            .catch(function(error){
                console.log(error);
            });    
        }
    }
}
</script>