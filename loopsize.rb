class Node
  attr_accessor :value, :next
end

def loop_size(node)
  array = []
  this_node = node
  while !array.include?(this_node.next)
    array << this_node.next
    this_node = this_node.next
  end
  array.size - array.index(this_node.next)
end

def create_chain_for_test(tail_size, loop_size)
  prev_node = start = Node.new
  start.next = start
  return start if loop_size == 1
  (1..tail_size).each do |i|
    prev_node.next = Node.new
    prev_node = prev_node.next
  end
  end_loop = prev_node
  (1...loop_size).each do |i|
    prev_node.next = Node.new
    prev_node = prev_node.next
  end
  prev_node.next = end_loop
  start
end

test_chain_start_node = create_chain_for_test(4, 13)

puts loop_size(test_chain_start_node)
