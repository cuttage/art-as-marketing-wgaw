// Copyright (c) 2021 Marta Fattori
// This code is licensed under MIT license (see LICENSE-MIT for details)
export default function(context) {
  context.store.commit('updatePage', context.route.name)
}
