def encode_rail_fence_cipher(str, num_rails)
  # your code here...
  rails = []
  output = []
  num_rails.times do |n|
    rails[n] = []
  end
  str_chars = str.chars
  counter = 0
  until str_chars.empty?
    rails.each_with_index do |rail, i|
      if i % num_rails == counter
        rail << str_chars.shift
      else
        rail << "."
      end
    end
    direction = 1 if counter == 0
    direction = -1 if counter == num_rails - 1
    if direction > 0
      counter += 1
    else
      counter -= 1
    end
  end
  rails.each do |rail|
    output += rail
  end
  (output - ["."]).join("")
end

def decode_rail_fence_cipher(str, num_rails)
  # your code here...
  rails = []
  idx = []
  size = []
  output = []
  idx_sep = str.length / (num_rails + 1)
  num_rails.times { size << 0 }
  counter = 0
  direction = 1
  str.length.times do
    num_rails.times do |i|
      size[i] += 1 if i % num_rails == counter
    end
    direction = 1 if counter == 0
    direction = -1 if counter == num_rails - 1
    if direction > 0
      counter += 1
    else
      counter -= 1
    end
  end
  index = 0
  copy = str.dup
  num_rails.times do |i|
    rails[i] = copy[0...size[i]]
    idx[i] = index
    index += size[i]
    copy = copy[size[i]..-1]
  end
  str.length.times do |i|
    modulus = 2 * num_rails - 2
    rail = i % modulus
    if rail > num_rails - 1
      rail = (num_rails - 1) - (rail - (num_rails - 1))
    end
    output << str[idx[rail]]
    idx[rail] += 1
  end
  output.join("")
end

encode_rail_fence_cipher('WEAREDISCOVEREDFLEEATONCE', 3)
# # 'WECRLTEERDSOEEFEAOCAIVDEN'
decode_rail_fence_cipher('WECRLTEERDSOEEFEAOCAIVDEN', 3)
# # 'WEAREDISCOVEREDFLEEATONCE'

fumert c,melacdaiukesricrsieieurpoa fa fttfa oieo oaemntVtti s i re!nndsa! sunq!piiirrusDotteaai.sietv stosmeosrPu u j n iuemaeiusqe apu, imtea im dpal  povecstii iomptn titrveauienatosge eebretdinrrisiulixdenuei e eoAan rixemirc

fumeoDsurriiip!qnus !asdnn!er i s  ittVtnmea oieo oapa eqsuieameui n j u uPrsoemsots  vteistteaaiotaneiuaevrtit ntpmoi iitscevop  lapd miu, imtea crimexir naAoe e ieunedxiluisirrnidterbesge ert c,melacdaiukesricrsieieurpoa fa fttf
