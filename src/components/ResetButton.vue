<template>
    <div class='is-component is-reset-button'>
        <v-btn depressed :color='this.color' v-on:click='clickOn()'>{{this.text}}</v-btn>
    </div>
</template>

<script>
    import Generics from './../lib/Generics';
    import { Component } from '../lib/Enums.js';

    export default {
        name : 'reset-button',
        mixins : [Generics],

        props : {
            // text : set the text into the input button
            'text' : {
                type : String,
                default : 'Reset'
            },
            // color : set the color ["success","error","warning","info"] into the v-btn
            "color":{
              type: String,
              default: "info"
            },
            // empty : clean all hit component displays
            'emptyHits' : {
                type : Boolean,
                default : true
            }
        },

        data : function() {
            return {
                CID : undefined
            }
        },

        methods : {
            clickOn : function() {
                this.bus.$emit('reset');

                this.$nextTick(() => {
                    this.mount();
                    this.fetch().then(() => {
                        if (this.emptyHits)
                            this.bus.$emit('emptyHits');
                    });
                });
            }
        },

        created : function() {
			// Interactive component declaration
            this.CID = this.addComponent(Component.RESET_BUTTON, this);
        }
    };
</script>
