<?php
/**
 * Created by PhpStorm.
 * User: moyses-oliveira
 * Date: 16/04/19
 * Time: 11:05
 */

namespace App\Service\AFD;


class AFDInput
{
    /**
     * @var int
     */
    private $start, $end, $length;

    /**
     * @var string
     */
    private $value = '';
    private $key = '';

    /**
     * @var bool
     */
    private $isText = false;

    public function __construct(string $key, int $start, int $end)
    {
        if($start < 1)
            throw new \Exception('start must be higher then 0');

        $this->key = $key;
        $this->start = $start - 1;
        $this->end = $end;
        $this->length = $end - $this->start;
    }

    public function isText():void {
        $this->isText = true;
    }

    /**
     * @return int
     */
    public function getStart(): int
    {
        return $this->start;
    }

    /**
     * @return int
     */
    public function getEnd(): int
    {
        return $this->end;
    }

    /**
     * @return int
     */
    public function getLength(): int
    {
        return $this->length;
    }

    /**
     * @return string
     */
    public function getKey(): string
    {
        return $this->key;
    }

    /**
     * @return string
     */
    public function getValue(): string
    {
        return $this->value;
    }

    /**
     * @param string $value
     * @throws \Exception
     */
    public function setValue(string $value): void
    {
        $this->value = $this->normalize($value);
    }

    private function normalize(string $value):string {
        if($this->isText)
            return $this->textValue($value);

        return $this->numberValue($value);
    }

    private function numberValue(string $value):string {
        $length = $this->getLength();
        $n = $this->extractNum($value);
        $v = substr($n, 0, $length);
        return str_pad($v, $length, '0', STR_PAD_LEFT);
    }

    private function extractNum(string $value) {

        preg_match_all('!\d+!', $value, $matches);
        return implode('', $matches[0]);
    }

    private function textValue(string $value):string {
        $length = $this->getLength();
        $v = substr($value, 0, $length);
        return str_pad($v, $length, ' ', STR_PAD_RIGHT);
    }
}