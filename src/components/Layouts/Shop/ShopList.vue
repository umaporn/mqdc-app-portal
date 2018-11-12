<template>
	<div class="col-12">
		<div class="card">
			<div class="card-header">
				Shop List
				<router-link tag="button" to="/shop-add" class="btn btn-primary float-right">
					<i class="fa fa-plus"></i>&nbsp; Add Shop
				</router-link>
			</div>
			<div class="card-body">
				<table class="table">
          <thead>
            <tr>
            <th>#</th>
            <th>id</th>
            <th>Name</th>
            <th class="text-center">Edit</th>
            <th class="text-center">Delete</th>
          </tr>
          </thead>
          <tbody>
            <tr v-for="( value, key, index ) in shopList" :key="index">
              <th>{{ index }}</th>
              <td>{{ value.id }}</td>
              <td>{{ value.name }}</td>
              <td class="text-center"><i class="fa fa-edit"></i></td>
              <td class="text-center"><i class="fa fa-close"></i></td>
            </tr>
          </tbody>
        </table>
			</div>
		</div>
	</div>
</template>

<script>

import { mapGetters } from 'vuex';

export default {
	name: 'ShopList',
	computed: {
		...mapGetters({
			shopList: 'shop/getShopList',
		}),
	},
	mounted() {
		this.$store.dispatch('shop/getShoplist');
	},
};
</script>
