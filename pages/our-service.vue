<template lang="pug">
  div.container.mx-auto
    div.grid.gap-1.grid-cols-5
      div.p-5
        div.mb-3(v-for="(item, itemIndex) in content.items" :keys="itemIndex")
          span.cursor-pointer(
            :class="{ 'font-bold': item.title === currentContent.title }"
            @click="currentContent = item"
          ) {{ item.title }}

      div.p-5.col-span-4(v-if="!_.isEmpty(currentContent)")
        img.mb-4.w-full.object-cover(:src="currentContent.headImage" style="height: 600px")
        div(v-html="currentContent.html")

        Gallery.my-6(:images="currentContent.galleryImages")

</template>

<script>
import Gallery from '@/components/Gallery.vue'

export default {
  components: {
    Gallery,
  },

  data() {
    return {
      currentContent: {},

      content: {
        items: [
          {
            title: 'Cleaning Service',
            html: '<h1 class="mb-3">Quis do eu</h1><p>Nostrud eu sunt exercitation reprehenderit dolore duis. Proident dolore aute ex incididunt veniam tempor exercitation deserunt aute laborum laborum excepteur deserunt. Qui non ex consectetur incididunt laboris elit consectetur adipisicing in culpa occaecat et officia aliquip.</p><p>Nostrud minim adipisicing reprehenderit mollit enim laborum aliqua do. Do officia mollit occaecat adipisicing officia. Cupidatat officia esse id id. Labore pariatur occaecat mollit qui deserunt consequat sit in minim. Laborum nisi anim veniam commodo consequat. Nostrud ipsum anim dolor proident sint cupidatat amet. Esse proident duis tempor ullamco officia veniam nulla tempor eu.</p>',
            headImage: '/images/cleaning-service.jpg',
            galleryImages: [
              'https://i.picsum.photos/id/151/600/400.jpg?blur=5&hmac=HG9Dtabq2kCfsx_M7NTR89pbnv7Par2OoHyj9xPqD3U',
              'https://i.picsum.photos/id/158/600/400.jpg?blur=5&hmac=Uqw0eN05Dp002K8vl3LAC6i4L6wq_4wPxNWzAd4j5P0',
              'https://i.picsum.photos/id/160/600/400.jpg?blur=5&hmac=MnZEIyuId2qOWByGhzt544bXAk8Scz9ieQPU72YivwA',
              'https://i.picsum.photos/id/251/600/400.jpg?blur=5&hmac=-yBCjecz_MF9u_tZ1FvEWr6jvh6B2m8DNCvz6CjEmpo',
            ],
          },
          {
            title: 'General Cleaning',
            html: '<h1 class="mb-3">Eu proident adipisicing</h1><p>Fugiat commodo quis adipisicing laborum. Ea ipsum Lorem irure eu. Laborum consequat laboris laboris id occaecat incididunt esse aute et sint excepteur officia laboris. Laborum proident laboris qui est aliqua tempor ut mollit et voluptate id est. Sint est ullamco nisi dolor excepteur dolore eu ut ex consequat do irure.</p><p>Qui Lorem nulla minim irure ad culpa deserunt reprehenderit excepteur culpa cupidatat sunt ex consectetur. Et sunt nisi irure labore ad anim laboris duis ea magna adipisicing sint voluptate aute. Reprehenderit est cillum id eu eiusmod id commodo. Mollit cupidatat ipsum minim cupidatat irure. Duis fugiat quis laboris elit laborum excepteur. Laborum ad voluptate occaecat minim culpa. Eu non minim irure non et aute reprehenderit laboris nulla mollit.</p>',
            headImage: '/images/general-cleaning.jpg',
            galleryImages: [
              'https://i.picsum.photos/id/151/600/400.jpg?blur=5&hmac=HG9Dtabq2kCfsx_M7NTR89pbnv7Par2OoHyj9xPqD3U',
              'https://i.picsum.photos/id/251/600/400.jpg?blur=5&hmac=-yBCjecz_MF9u_tZ1FvEWr6jvh6B2m8DNCvz6CjEmpo',
              'https://i.picsum.photos/id/160/600/400.jpg?blur=5&hmac=MnZEIyuId2qOWByGhzt544bXAk8Scz9ieQPU72YivwA',
              'https://i.picsum.photos/id/158/600/400.jpg?blur=5&hmac=Uqw0eN05Dp002K8vl3LAC6i4L6wq_4wPxNWzAd4j5P0',
            ],
          },
          {
            title: 'Gondola',
            html: '<h1 class="mb-3">Consequat nisi pariatur</h1><p>Excepteur laborum tempor eu incididunt culpa eiusmod. Aliqua eiusmod magna consequat labore duis consectetur excepteur aliquip. Adipisicing magna et aliquip deserunt aute commodo dolore nulla et Lorem. Quis quis consequat magna Lorem est laborum. Duis fugiat aute nostrud ipsum fugiat occaecat enim cillum ad quis fugiat tempor velit. Irure elit exercitation ipsum et irure irure consequat labore occaecat nisi.</p><p>Reprehenderit adipisicing non nulla eu laborum aliqua nisi adipisicing id consequat. Velit culpa consequat duis quis minim consectetur consectetur deserunt ea labore consectetur cupidatat velit. Deserunt mollit do irure ea aliqua culpa cillum. Fugiat excepteur elit culpa voluptate. Commodo labore Lorem et veniam veniam sint. Laborum proident quis ullamco excepteur exercitation pariatur duis. Quis consequat laboris nulla magna labore ut est aliqua magna cupidatat irure eiusmod.</p>',
            headImage: '/images/gondola.jpg',
            galleryImages: [
              'https://i.picsum.photos/id/251/600/400.jpg?blur=5&hmac=-yBCjecz_MF9u_tZ1FvEWr6jvh6B2m8DNCvz6CjEmpo',
              'https://i.picsum.photos/id/151/600/400.jpg?blur=5&hmac=HG9Dtabq2kCfsx_M7NTR89pbnv7Par2OoHyj9xPqD3U',
              'https://i.picsum.photos/id/158/600/400.jpg?blur=5&hmac=Uqw0eN05Dp002K8vl3LAC6i4L6wq_4wPxNWzAd4j5P0',
              'https://i.picsum.photos/id/160/600/400.jpg?blur=5&hmac=MnZEIyuId2qOWByGhzt544bXAk8Scz9ieQPU72YivwA',
            ],
          },
          {
            title: 'Landscape',
            html: '<h1 class="mb-3">Id laborum voluptate</h1><p>Esse aute est exercitation velit laborum ad sint non cillum nostrud anim ut. Labore amet non tempor ex. Occaecat do consequat magna amet velit. Mollit duis consectetur amet incididunt tempor nisi nulla nulla deserunt. Est voluptate aliqua laborum sint irure aute eu esse ex est exercitation dolore aliquip. Dolore dolor excepteur dolor aliqua.</p><p>Cupidatat quis ad est elit aute enim mollit irure ipsum incididunt laborum. Sunt incididunt officia aliqua reprehenderit ad. Consectetur consequat incididunt ea tempor cillum laboris cillum culpa eu tempor aliqua enim officia Lorem. Deserunt voluptate consectetur tempor cillum excepteur ut ex. Occaecat nulla veniam voluptate Lorem sint.</p>',
            headImage: '/images/landscape.jpg',
            galleryImages: [
              'https://i.picsum.photos/id/151/600/400.jpg?blur=5&hmac=HG9Dtabq2kCfsx_M7NTR89pbnv7Par2OoHyj9xPqD3U',
              'https://i.picsum.photos/id/158/600/400.jpg?blur=5&hmac=Uqw0eN05Dp002K8vl3LAC6i4L6wq_4wPxNWzAd4j5P0',
              'https://i.picsum.photos/id/160/600/400.jpg?blur=5&hmac=MnZEIyuId2qOWByGhzt544bXAk8Scz9ieQPU72YivwA',
              'https://i.picsum.photos/id/251/600/400.jpg?blur=5&hmac=-yBCjecz_MF9u_tZ1FvEWr6jvh6B2m8DNCvz6CjEmpo',
            ],
          },
          {
            title: 'Office Boy/Girl',
            html: '<h1 class="mb-3">Quis dolor dolor</h1><p>Dolore velit do quis in ex eu adipisicing excepteur anim. Aliqua sunt aliqua ut dolor consectetur voluptate. Id mollit excepteur qui incididunt. Irure sunt qui aliquip aliquip est ut quis dolor ipsum labore aliquip aute. Officia mollit occaecat aute mollit ad ad fugiat reprehenderit ex.</p><p>Magna ullamco duis deserunt tempor laboris velit. Officia ipsum culpa cillum mollit tempor aute esse irure laboris culpa culpa laborum. Ipsum ex in incididunt consequat est pariatur officia officia magna. Cillum sint officia anim quis ut est laboris sit irure mollit. Occaecat ex aliqua voluptate ipsum mollit eiusmod do aliquip ad et occaecat magna. Eu cillum culpa ullamco laboris reprehenderit. Laboris irure occaecat Lorem nulla Lorem aliquip consectetur.</p>',
            headImage: '/images/office-boy.jpg',
            galleryImages: [
              'https://i.picsum.photos/id/151/600/400.jpg?blur=5&hmac=HG9Dtabq2kCfsx_M7NTR89pbnv7Par2OoHyj9xPqD3U',
              'https://i.picsum.photos/id/160/600/400.jpg?blur=5&hmac=MnZEIyuId2qOWByGhzt544bXAk8Scz9ieQPU72YivwA',
              'https://i.picsum.photos/id/158/600/400.jpg?blur=5&hmac=Uqw0eN05Dp002K8vl3LAC6i4L6wq_4wPxNWzAd4j5P0',
              'https://i.picsum.photos/id/251/600/400.jpg?blur=5&hmac=-yBCjecz_MF9u_tZ1FvEWr6jvh6B2m8DNCvz6CjEmpo',
            ],
          },
          {
            title: 'Pramukarya',
            html: '<h1 class="mb-3">Incididunt ut duis</h1><p>Exercitation officia ut occaecat elit nostrud Lorem sit mollit duis in nisi nisi. Consequat non mollit velit ea commodo. Nostrud sunt do labore cupidatat ullamco quis laborum consequat sit aute sit do. Cillum est proident eiusmod id laborum culpa.</p><p>Magna aute do anim eiusmod adipisicing. Id ex laborum ut ad mollit elit exercitation enim nulla et esse fugiat mollit deserunt. Officia ex anim ad proident officia et amet non irure ea aliquip reprehenderit. Do proident excepteur deserunt qui minim adipisicing sint proident ut commodo consequat sint non dolor. Ullamco nulla eiusmod occaecat reprehenderit tempor nulla amet nostrud ipsum.</p>',
            headImage: '/images/pramukarya.jpg',
            galleryImages: [
              'https://i.picsum.photos/id/160/600/400.jpg?blur=5&hmac=MnZEIyuId2qOWByGhzt544bXAk8Scz9ieQPU72YivwA',
              'https://i.picsum.photos/id/158/600/400.jpg?blur=5&hmac=Uqw0eN05Dp002K8vl3LAC6i4L6wq_4wPxNWzAd4j5P0',
              'https://i.picsum.photos/id/151/600/400.jpg?blur=5&hmac=HG9Dtabq2kCfsx_M7NTR89pbnv7Par2OoHyj9xPqD3U',
              'https://i.picsum.photos/id/251/600/400.jpg?blur=5&hmac=-yBCjecz_MF9u_tZ1FvEWr6jvh6B2m8DNCvz6CjEmpo',
            ],
          },
          {
            title: 'Pramusaji',
            html: '<h1 class="mb-3">Incididunt laborum ipsum</h1><p>Aliqua eu id nulla aliqua. Nostrud laboris eiusmod nulla sit. Lorem dolor culpa deserunt et eu do velit eiusmod officia incididunt non. Mollit cupidatat ea pariatur et aliquip occaecat in ad deserunt do anim. Anim aute eiusmod proident esse. Duis reprehenderit laborum commodo et non eiusmod. Minim mollit ex enim labore laborum dolore laborum anim aliqua qui incididunt nulla.</p><p>Excepteur exercitation deserunt duis qui ea esse do consectetur exercitation ex sit consequat amet. Laboris ullamco magna velit duis do consectetur incididunt Lorem ea aliquip sint qui nostrud. Eu commodo laboris incididunt nostrud mollit minim occaecat ullamco enim sit amet eiusmod. Laboris tempor non velit enim. Ea est enim ipsum elit sunt sint anim cupidatat cillum deserunt magna irure. Velit eiusmod exercitation veniam nulla mollit mollit aliquip deserunt aute consequat minim sunt enim. Sit nisi officia laboris commodo laborum non sit irure.</p>',
            headImage: '/images/pramusaji.jpg',
            galleryImages: [
              'https://i.picsum.photos/id/151/600/400.jpg?blur=5&hmac=HG9Dtabq2kCfsx_M7NTR89pbnv7Par2OoHyj9xPqD3U',
              'https://i.picsum.photos/id/251/600/400.jpg?blur=5&hmac=-yBCjecz_MF9u_tZ1FvEWr6jvh6B2m8DNCvz6CjEmpo',
              'https://i.picsum.photos/id/158/600/400.jpg?blur=5&hmac=Uqw0eN05Dp002K8vl3LAC6i4L6wq_4wPxNWzAd4j5P0',
              'https://i.picsum.photos/id/160/600/400.jpg?blur=5&hmac=MnZEIyuId2qOWByGhzt544bXAk8Scz9ieQPU72YivwA',
            ],
          },
        ],
      },
    }
  },

  mounted() {
    this.currentContent = this.content.items[0]

    setTimeout(() => {
      this.$store.commit('setLoading', false)
    }, 200)
  },
}
</script>

<style lang="scss" scoped></style>
