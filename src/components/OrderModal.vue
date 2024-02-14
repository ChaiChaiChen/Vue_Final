<!-- eslint-disable vuejs-accessibility/label-has-for -->
<template>
    <div class="modal fade" id="orderModal" tabindex="-1" role="dialog"
         aria-labelledby="exampleModalLabel" aria-hidden="true" ref="modal">
      <div class="modal-dialog" role="document">
        <div class="modal-content border-0">
          <div class="modal-header bg-modal-brown text-white">
            <h5 class="modal-title">
              <span>檢視訂單</span>
            </h5>
            <button type="button" class="btn-close"
                    data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div class="modal-body">
                  <div class="mb-3">
                    訂購人：{{ user.name }}
                    </div>
                  <div class="mb-3">
                    Email：{{ user.email }}
                    </div>
                  <div class="mb-3">
                    購買時間：{{ $filters.date(tempOrder.create_at) }}
                    </div>
                  <div class="mb-3">
            訂單列表：<div v-for="(product, i ) in tempOrder.products" :key="i">
                    {{ product.product.title }}
                    數量：{{ product.qty }}
                    {{ product.product.unit }}
                  </div>
                  </div>
                  <div class="mb-3">
                    應付金額：{{ $filters.currency(tempOrder.total) }}
                    </div>
                  <div class="mb-3">
                    留言：{{ tempOrder.message }}
                    </div>
                  <div class="mb-3">
                <div class="form-check">
                  <input
                    class="form-check-input"
                    type="checkbox"
                    v-model="tempOrder.is_paid"
                    :true="1"
                    :false="0"
                    id="is_paid"
                  />
                  <label class="form-check-label" for="is_paid">
                    是否付款
                  </label>
                </div>
              </div>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-outline-secondary"
                    data-bs-dismiss="modal">取消
            </button>
            <button type="button" class="btn btn-primary"
                    @click="$emit('revise-item',tempOrder)">確認
            </button>
          </div>
        </div>
      </div>
    </div>
  </template>
<script>
import modalMixin from '@/mixins/modalMixin';

export default {
  props: {
    order: {
      type: Object,
      default() { return {}; },
    },
  },
  data() {
    return {
      modal: {},
      tempOrder: {},
      user: '',
    };
  },
  watch: {
    order() {
      this.tempOrder = this.order;
      this.user = this.tempOrder.user;
      console.log('tempOrder', this.tempOrder);
    },
  },
  mixins: [modalMixin],
};
</script>
