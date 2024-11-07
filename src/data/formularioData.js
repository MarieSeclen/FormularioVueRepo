import { toRaw } from "vue";
export default {
  data() {
    return {
      form: {
        title: "ENCUESTA DE SATISFACCIÓN 2024 - PRIMARIA",
        questions: [
          {
            type: "MULTIPLE_CHOICE",
            title: "¿Cómo calificaría la calidad del curso actual?",
            options: ["Bueno", "Regular", "Malo"],
            _id: { $oid: "672058f1f76e8c7681b78a06" },
          },
          {
            type: "MULTIPLE_CHOICE",
            title:
              "¿Considera que el curso le está proporcionando conocimientos y habilidades aplicables en su área laboral?",
            options: ["De acuerdo", "En desacuerdo"],
            _id: { $oid: "672058f1f76e8c7681b78a07" },
          },
          {
            type: "MULTIPLE_CHOICE",
            title: "¿Cómo calificarías al ponente o ponentes del curso actual?",
            options: ["Bueno", "Regular", "Malo"],
            _id: { $oid: "672058f1f76e8c7681b78a08" },
          },
          {
            type: "MULTIPLE_CHOICE",
            title:
              "¿El temario del programa estaba bien organizado y estructurado?",
            options: ["SI", "NO"],
            _id: { $oid: "672058f1f76e8c7681b78a09" },
          },
          {
            type: "TEXT",
            title:
              "Proporcione una recomendación o sugerencia adicional que pueda ayudarnos a mejorar el programa actual:",
            options: [],
            _id: { $oid: "672058f1f76e8c7681b78a0a" },
          },
          {
            type: "MULTIPLE_CHOICE",
            title:
              "¿Le gustaría capacitarse en otros programas con nosotros en el futuro?",
            options: ["SI", "NO"],
            _id: { $oid: "672058f1f76e8c7681b78a0b" },
          },
          {
            type: "TEXT",
            title:
              "¿Qué diplomado o especialización les gustaría que se aperture para potenciar su expediente profesional?. Déjanos en los comentarios.",
            options: [],
            _id: { $oid: "672058f1f76e8c7681b78a0c" },
          },
        ],
      },
      responses: {},
    };
  },
  methods: {
    async submitForm() {
      const plainResponses = toRaw(this.responses);

      try {
        const response = await fetch("http://localhost:5000/api/responses", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(plainResponses),
        });

        const data = await response.json();
        this.serverResponse = data;

        // Imprimir las respuestas en la consola del navegador
        console.log("Respuestas enviadas:", plainResponses);

        // Limpiar el formulario
        this.responses = {};
      } catch (error) {
        console.error("Error al enviar las respuestas:", error);
      }
    },
  },
};
