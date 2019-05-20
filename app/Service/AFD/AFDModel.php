<?php
/**
 * Created by PhpStorm.
 * User: moyses-oliveira
 * Date: 16/04/19
 * Time: 11:05
 */

namespace App\Service\AFD;


abstract class AFDModel
{
    /**
     * @var \ArrayObject
     */
    private $collection;

    /**
     * @var int
     */
    private $length = 0;

    public function __construct()
    {
        $this->collection = new \ArrayObject();
    }

    public function newInput(string $key, int $start, int $end): AFDInput {
        $this->length = max($this->length, $end);
        $input = new AFDInput($key, $start, $end);
        $this->collection->offsetSet($key, $input);
        return $input;
    }

    public function getInput($key):AFDInput {
        return $this->collection->offsetGet($key);
    }

    public function set(string $key, string $value) {
        $this->getInput($key)->setValue($value);
    }

    public function render() {
        $output = str_repeat(' ', $this->length);
        $collection = $this->collection->getArrayCopy();
        foreach($collection as $input)
            $this->strposReplace($output, $input);

        return $output;
    }

    private function strposReplace(string &$raw, AFDInput $input) {

        $start = $input->getStart();
        $value = $input->getValue();
        $length = $input->getLength();
        for($i=0;$i<$length;$i++)
            $raw[$start+$i] = $value[$i];

    }

    public function fill(array $collection) {
        foreach($collection as $key=>$value)
            $this->set($key, $value);

        return $this;
    }
}