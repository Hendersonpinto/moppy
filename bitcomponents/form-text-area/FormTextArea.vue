<template>
    <div class="flex border-b border-40">
        <div class="w-1/5 px-8 py-6">
            <label
                :for="inputID"
                class="inline-block text-80 pt-2 leading-tight"
            >
                {{ label }}:
                <span v-if="required" class="text-danger text-sm">*</span>
            </label>
        </div>
        <div class="py-6 px-8 w-4/5">
            <textarea
                :id="inputID"
                :name="inputID"
                rows="5"
                class="w-full form-control form-input form-input-bordered py-3 h-auto"
                :required="required"
                :readonly="readonly"
                :value="value"
                @input="$emit('input', $event.target.value)"
            ></textarea>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        inputID: String,
        label: String,
        readonly: Boolean,
        required: Boolean,
        value: String
    }
};
</script>
