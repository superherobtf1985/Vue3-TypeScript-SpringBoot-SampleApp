class QuasarMsgService {
  create($q: any) {
    $q.notify({
      type: 'positive',
      message: '登録しました'
    })
  }

  update($q: any) {
    $q.notify({
      type: 'positive',
      message: '更新しました'
    })
  }

  delete($q: any) {
    $q.notify({
      type: 'positive',
      message: '削除しました'
    })
  }
  
  error($q: any) {
    $q.notify({
      type: 'negative',
      message: 'エラーが発生しました'
    })
  }

}

export default new QuasarMsgService();