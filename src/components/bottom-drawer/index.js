/* eslint-disable no-undef */
Component({
    properties: {
        visible: {
            type: Boolean,
            value: false
        },

        mask: {
            type: Boolean,
            value: true
        }
    },
    data: {},
    methods: {
        handleMaskClick () {
            if (!this.data.maskClosable) {
                return;
            }
            this.triggerEvent('close', {});
        }
    }
});
