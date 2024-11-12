# 키워드 정리

# <b style="color:mediumpurple">useMutation</b>
## useMutation
<span style="text-decoration: lightgreen wavy underline;"><b>Get 요청</b> : useQuery 사용</span> && <span style="text-decoration: mediumaquamarine wavy underline;"><b>그 외 요청</b> : useMutation 사용</span> 권장\
React-Qurey를 통해 서버에 <b style="color:mediumaquamarine">삽입<span style="font-size:11px">(insert)</span>, 수정<span style="font-size:11px">(update)</span>, 삭제<span style="font-size:11px">(delete)</span></b> 작업을 요청할 때 사용하는 훅\
<span style="color:gray">(Get은 데이터 조회)</span>

<blockquote style="  border-left-color: #ad93e6; border-right-color: #977bd5;">
    <b style="font-size:16px;">mutationFn</b>
    <div>
        mutationFn은 <b>promise 처리</b>가 이루어지는 함수로 axios를 이용해 <b>서버 API요청</b>을 하는 부분 </br>
    </div>
    </br>
    예시 코드
    <div style="border: 1px solid; padding:15px; margin:5px; border-radius:5px; font-family: 'console', monospace;">
        // 1</br>
const savePerson = useMutation((person: Iperson) => axios.post('/savePerson', person));
</br></br>
// 2</br>
const savePerson = useMutation({
    mutationFn: (person: Iperson) => axios.post('/savePerson', person)
})
    </div>
</br>
</blockquote>

## onMutate
`useQuery`나 `useMutation` 훅에서 mutation이 발생했을 때 콜백 함수를 설정함


## onSuccess
서버 데이터 변경 <b style="color:mediumaquamarine">요청이 성공</b>했을 때 실행되는 구간

## onError
서버 데이터 변경 <b style="color:mediumaquamarine">요청이 실패</b>했을 때 실행되는 구간

## onSettled
성공 실패와 관계없이 마지막에 <b style="color:mediumaquamarine">항상 실행</b>되는 구간\
<span style="color:gray">(finally와 비슷함)</span>

## invalidataeQueries
queryKey 유효성을 제거한다.\
유효성을 제거하여 서버에서 다시 데이터를 조회할 수 있다.

# <b style="color:mediumpurple">Optimistic Update</b>

## 낙관적 업데이트
서버에 요청을 보내기 전에 UI에 변화를 반영하는 것\
서버의 응답을 기다리지 않기 때문에 빠른 피드백을 제공할 수 있다.

## 낙관적 업데이트 with useMutation
서버에서 요청을 거절할 경우 이전 상태로 돌리기 위한 rollback이 필요하다\
이 것을 onMutate가 제공한다.

예시 코드
```jsx
const queryClient = useQueryClient()
 
useMutation({
  mutationFn: updateTodo,
  // When mutate is called:
  onMutate: async (newTodo) => {
    // Cancel any outgoing refetches
    // (so they don't overwrite our optimistic update)
    await queryClient.cancelQueries({ queryKey: ['todos'] })
 
    // Snapshot the previous value
    const previousTodos = queryClient.getQueryData(['todos'])
 
    // Optimistically update to the new value
    queryClient.setQueryData(['todos'], (old) => [...old, newTodo])
 
    // Return a context object with the snapshotted value
    return { previousTodos }
  },
  // If the mutation fails,
  // use the context returned from onMutate to roll back
  onError: (err, newTodo, context) => {
    queryClient.setQueryData(['todos'], context.previousTodos)
  },
  // Always refetch after error or success:
  onSettled: () => {
    queryClient.invalidateQueries({ queryKey: ['todos'] })
  },
})
```