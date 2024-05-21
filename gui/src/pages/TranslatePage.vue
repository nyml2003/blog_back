<script setup>
import { ref } from "vue";
import translateMIPS2Verilog from "src/utils/instruction";
const instructions = ref(`addi r1,r1,0x0004
or r4,r5,r6
addi r3,r2,0x0
beq r3,r4,6'h0b
addi r1,r1,0x0004
addi r1,r1,0x0004
addi r1,r1,0x0004
addi r1,r1,0x0004
addi r1,r1,0x0004
addi r1,r1,0x0004
addi r1,r1,0x0004
addi r1,r1,0x0004`);
const verilog = ref("");
function compile() {
    verilog.value = translateMIPS2Verilog(instructions.value.split("\n")).join("\n");
}
</script>

<template>
  <q-page padding class="flex flex-center">
        <q-form @submit="submit">
            <div class="flex ">

            <q-input v-model="instructions" label="指令" type="textarea" class="q-ma-md" autogrow style="width: 30vw; height: 50vh"/>
            <q-input v-model="verilog" label="Verilog" type="textarea" class="q-ma-md" autogrow style="width: 30vw; height: 50vh"/>
            </div>
            <div class="flex flex-center q-mt-md">
                <q-btn label="生成字节码" type="submit" @click="compile" />
            </div>

        </q-form>
    </q-page>
</template>
