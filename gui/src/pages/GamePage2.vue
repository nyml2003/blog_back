<script setup>
import { ref } from "vue";
import { guestApi } from "boot/axios";
import { useQuasar } from "quasar";
const $q = useQuasar();
const sortBy = ref({
    frq: "",
    len: "",
});
const submit = () => {
    $q.loading.show();
    guestApi.get("/wordle/query", {
        params: {
            frq: sortBy.value.frq,
            len: sortBy.value.len,
        }
    }).then((res) => {
        $q.loading.hide();
        alert(res.data.word);
    });
}

</script>


<template>
    <q-page padding class="flex flex-center">
        <q-form @submit="submit">
            <q-input v-model="sortBy.frq" label="频率" type="text" />
            <q-input v-model="sortBy.len" label="长度" type="text" />
            <div class="flex flex-center q-mt-md">
                <q-btn label="查询" type="submit" />
            </div>
        </q-form>
    </q-page>
</template>

