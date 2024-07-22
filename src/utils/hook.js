import {
  onMounted,
  watch
} from 'vue';
import {
  useRoute,
  useRouter
} from 'vue-router';

const scroll = (id, ops) => {
  if (id) {
    document.querySelector(`#${id}`).scrollIntoView(ops);
  } else {
    document.querySelector('.mh-view').scrollIntoView(ops);
  }
}

export const scrollIntoView = (ops = {}) => {
  const router = useRouter();
  const route = useRoute();

  const deleteQuery = () => {
    let timer = setTimeout(() => {
      router.replace({
        name: route.name
      })
      clearTimeout(timer);
      timer = null;
    }, 1000);
  }

  onMounted(() => {
    const hash = route.query.hash;
    scroll(hash, ops);
    deleteQuery();
  })

  watch(() => route.query.hash, (v) => {
    if (v) {
      const hash = route.query.hash;
      scroll(hash, ops);
      deleteQuery();
    }
  })
}
