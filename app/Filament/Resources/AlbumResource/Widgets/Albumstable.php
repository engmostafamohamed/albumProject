<?php

namespace App\Filament\Resources\AlbumResource\Widgets;

use Filament\Widgets\ChartWidget;

class Albumstable extends ChartWidget
{
    protected static ?string $heading = 'Chart';

    protected function getData(): array
    {
        return [
            //
        ];
    }

    protected function getType(): string
    {
        return 'bubble';
    }
}
