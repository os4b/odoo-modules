ls | while read dir
do
  [ "$dir" == "disabled" ] && continue
  test -d $dir && echo $dir
  git mv $dir disabled
done
