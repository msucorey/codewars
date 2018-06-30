def bump(road_str)
  bump_count = 0
  road_str.chars.each do |char|
    if char == 'n'
      bump_count += 1
    end
  end
  bump_count > 15 ? 'Car Dead' : 'Woohoo!'
end