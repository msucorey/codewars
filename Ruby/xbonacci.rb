def Xbonacci(s,n)
  running_sequence = s
  init_len = running_sequence.length
  result = []
  n.times do |i|
    if i < init_len
      result << running_sequence[i]
    else
      nextnum = running_sequence[running_sequence.length - init_len..-1].inject(:+)
      running_sequence << nextnum
      result << nextnum
    end
  end
  result
end

Xbonacci([0,1],10)
# [0,1,1,2,3,5,8,13,21,34])
Xbonacci([1,1],10)
# [1,1,2,3,5,8,13,21,34,55])
Xbonacci([0,0,0,0,1],10)
# [0,0,0,0,1,1,2,4,8,16])
Xbonacci([1,0,0,0,0,0,1],10)
# [1,0,0,0,0,0,1,2,3,6])
Xbonacci([1,0,0,0,0,0,0,0,0,0],20)
# [1,0,0,0,0,0,0,0,0,0,1,1,2,4,8,16,32,64,128,256])
