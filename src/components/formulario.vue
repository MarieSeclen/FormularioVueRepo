<template>
    <div class="max-w-2xl mx-auto flex flex-col p-6 gap-10">
        <h2 class="text-heading text-2xl font-bold text-center mb-6">{{ form.title }}</h2>
        <form @submit.prevent="submitForm" class="space-y-6">
            <div v-for="(question, index) in form.questions" :key="index" class="border border-gray-200 bg-gray-100 rounded-md px-3 py-2 shadow-lg">
                <span class="block text-sm tracking-tight leading-7 text-gray-700 sm:text-base">{{ question.title }}</span>
                
                <!-- Opciones de selección para preguntas de tipo MULTIPLE_CHOICE -->
                <div v-if="question.type === 'MULTIPLE_CHOICE'" class="flex flex-col gap-2 mt-2">
                    <button
                        v-for="(option, i) in question.options"
                        :key="i"
                        type="button"
                        @click="responses[question._id.$oid] = option"
                        :class="[
                            'w-full p-2 border rounded text-left flex items-center gap-2',
                            responses[question._id.$oid] === option ? 'bg-blue-500 text-white' : 'border-gray-300 bg-white text-gray-700'
                        ]"
                    >
                        <span class="w-6">
                            <i :class="responses[question._id.$oid] === option ? 'far fa-circle-check text-white' : 'far fa-circle text-gray-500'"></i>
                        </span>
                        <span>{{ option }}</span>
                    </button>
                </div>

                <!-- Cuadro de texto para preguntas de tipo TEXT -->
                <div v-else-if="question.type === 'TEXT'" class="mt-2">
                    <textarea
                        :name="`question-${index}`"
                        v-model="responses[question._id.$oid]"
                        placeholder="Escribe tu respuesta aquí..."
                        class="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-600"
                    ></textarea>
                </div>
            </div>

            <button type="submit" class="w-full bg-green-600 text-white py-2 rounded-md hover:bg-green-700 transition flex items-center justify-center space-x-2">
                <i class="fas fa-save"></i>
                <span>Guardar</span>
            </button>
        </form>
    </div>
</template>

<script>
import formularioData from '../data/formularioData.js';

export default {
    mixins: [formularioData],
};
</script>
