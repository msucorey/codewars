def isValidWalk(walk)
  #your code here
  direction_counts = Hash.new(0)
  walk.each do |direction|
    direction_counts[direction] += 1
  end
  norths, souths = direction_counts['n'], direction_counts['s']
  easts, wests   = direction_counts['e'], direction_counts['w']
  return (walk.length == 10) && (norths == souths)  && (easts == wests)
end

#some test cases for you...
puts isValidWalk(['n','s','n','s','n','s','n','s','n','s'])
puts isValidWalk(['w','e','w','e','w','e','w','e','w','e','w','e'])
puts isValidWalk(['w'])
puts isValidWalk(['n','n','n','s','n','s','n','s','n','s'])
